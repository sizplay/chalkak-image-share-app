/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import NavBar from '@/Components/NavBar';
import styled from '@emotion/styled';
import { useCallback, useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { trpcClient, trpcReactClient } from '@/lib/trpc-client';
import { useRouter } from 'next/router';
import { X } from 'lucide-react';
import axios from 'axios';
import { getHeightAndWidthFromDataUrl } from '@/Components/utils/getHeightAndWidthFromDataUrl';
import { getDate } from '@/Components/utils/getDate';
import AlbumHeader from '@/Components/AlbumHeader';
import EmojiPickerComponent from '@/Components/EmojiPicker';
import { EmojiClickData, EmojiStyle } from 'emoji-picker-react';
import debounce from 'lodash/debounce';
import Spinner from '@/Components/utils/spinner';
import { useSession } from 'next-auth/react';
import backgroundS3Upload from '@/Components/utils/backgroundS3Upload';
import useResize from '@/Components/hooks/useResize';
import { reactModalStyles } from '@/types/type';

export interface imageProps {
  album_id: number;
  path: string;
  width: number;
  height: number;
  size: number;
}

const AlbumCreate = () => {
  const [imageFiles, setImageFiles] = useState<FileList | null>(null);
  const [albumName, setAlbumName] = useState<string>('');
  const [albumDescription, setAlbumDescription] = useState<string>('');
  const [isIconModalOpen, setIsIconModalOpen] = useState<boolean>(false);
  const [icon, setIcon] = useState<string>('');
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const [backfroundFile, setBackfroundFile] = useState<FileList | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [isFileResized, setIsFileResized] = useState<boolean>(false);

  const router = useRouter();
  const userInfo = useSession();
  const { refetch } = trpcReactClient.getAlbumList.useQuery();

  useEffect(() => {
    if (isScrolling) {
      window.scrollTo(0, document.body.scrollHeight);
      setIsScrolling(false);
    }
  }, [isScrolling]);

  const { resizedImageFiles } = useResize(imageFiles || undefined);

  useEffect(() => {
    if (!isFileResized && resizedImageFiles) {
      setImageFiles(resizedImageFiles);
      setIsFileResized(true);
    }
  }, [isFileResized, resizedImageFiles]);

  const handleAlbumName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlbumName(e.target.value);
  };

  const handleAlbumDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlbumDescription(e.target.value);
  };

  const handleImages = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    setImageFiles((prev) => {
      if (prev) {
        const dataTranster = new DataTransfer();
        Array.from(prev).forEach((image) => {
          dataTranster.items.add(image);
        });
        if (files) {
          Array.from(files).forEach((image) => {
            dataTranster.items.add(image);
          });
          return dataTranster.files;
        }
      }
      return e.target.files;
    });
    setIsScrolling(true);
  }, []);

  const handleBackgroundImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      setBackgroundImage(URL.createObjectURL(files[0]));
      setBackfroundFile(files);
    }
  };

  const handleCancelImage = (imageName: string) => {
    const dataTranster = new DataTransfer();
    if (imageFiles) {
      Array.from(imageFiles)
        .filter((image) => {
          return imageName !== image.name;
        })
        .forEach((image) => {
          dataTranster.items.add(image);
        });
    }
    setImageFiles(dataTranster.files);
  };

  const handleIconModalOpen = () => {
    setIsIconModalOpen(true);
  };

  const handleIconModalClose = () => {
    setIsIconModalOpen(false);
  };

  const handleDeleteImage = () => {
    setBackgroundImage('');
  };

  const handleEmojiClick = (emojiObject: EmojiClickData) => {
    setIcon(emojiObject.getImageUrl(EmojiStyle.NATIVE));
    setIsIconModalOpen(false);
  };

  const handleDeleteIcon = () => {
    setIcon('');
    setIsIconModalOpen(false);
  };

  const handleSubmit = async () => {
    if (!imageFiles) {
      alert('이미지를 선택해주세요.');
      return;
    }
    if (!albumName) {
      alert('앨범 이름을 입력해주세요.');
      return;
    }
    if (!albumDescription) {
      alert('앨범 설명을 입력해주세요.');
      return;
    }
    try {
      setIsLoading(true);

      // 1. 앨범 생성
      const returnedAlbumData = await trpcClient.insertAlbum.mutate({
        title: albumName,
        subtitle: albumDescription,
        icon,
      });
      const albumId = returnedAlbumData?.album_id;
      const newImages: imageProps[] = [];

      let backgroundPath = '';
      if (backfroundFile) {
        backgroundPath = await backgroundS3Upload(backfroundFile[0], albumId, userInfo?.data?.user?.id || '');
      }

      await trpcClient.updateAlbum.mutate({
        albumId,
        backgroundImage: backgroundPath,
      });

      // 2. 이미지 업로드
      if (albumId !== 0 && imageFiles) {
        const date = getDate();

        Array.from(imageFiles).forEach(async (imageFile: File) => {
          const fileAsDataURL = window.URL.createObjectURL(imageFile);
          const dimension = await getHeightAndWidthFromDataUrl(fileAsDataURL);
          const { width, height } = dimension;

          const imageName = `${userInfo?.data?.user?.id || ''}/${albumId}/${date}/${
            imageFile.name
          }~${new Date().getTime()}`;

          // 이미지 파일 s3에 업로드
          const s3uploadData = await axios.post('/api/upload', {
            name: imageName,
            body: imageFile,
            type: imageFile.type,
          });
          const { url } = s3uploadData.data;
          await axios.put(url, imageFile, {
            headers: {
              'Content-Type': imageFile.type,
              'Access-Control-Allow-Origin': '*',
            },
          });
          const newUrl = new URL(url);

          // 3. 업로드된 이미지 url, width, height 받아서 이미지 디비에 저장
          const imageData = {
            album_id: albumId,
            path: `${newUrl.origin}${newUrl.pathname}`,
            width: width || 0,
            height: height || 0,
            size: imageFile.size || 0,
          };
          newImages.push(imageData);

          if (newImages.length === imageFiles.length) {
            const response = await trpcClient.insertImages.mutate(newImages);
            if (response.affected_rows === imageFiles.length) {
              setIsLoading(false);
              alert('앨범이 생성되었습니다.');
              refetch().then((data) => {
                const img = new Image();
                img.src = data?.data[0].images[0].path || '';
                router.push(`/album/${albumId}`);
              });
            }
          }
        });
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      // eslint-disable-next-line no-new
      alert('에러가 발생하였습니다. 다시 이용해주세요.');
    }
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <StyledAlbumCreate>
      <NavBar leftArrow={true} />
      <AlbumHeader
        onIconModalOpen={handleIconModalOpen}
        onChangeImage={handleBackgroundImages}
        onDeleteImage={handleDeleteImage}
        backgroundImage={backgroundImage}
        icon={icon}
        showEditButton={true}
        showDeleteButton={true}
      />
      <form>
        <input
          type="text"
          placeholder="앨범 이름을 입력해주세요."
          value={albumName}
          onChange={handleAlbumName}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={true}
        />
        <input
          type="text"
          placeholder="앨범 설명을 입력해주세요."
          value={albumDescription}
          onChange={handleAlbumDescription}
        />
        <label className="image-label" htmlFor="images">
          이미지를 선택해주세요
        </label>
        <input id="images" type="file" multiple accept="image/*" onChange={handleImages} />
        {imageFiles && (
          <AlbumImageWrapper>
            {Array.from(imageFiles)
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((image) => (
                <ImageWrapper key={image.name}>
                  <img src={URL.createObjectURL(image)} alt="album" />
                  <CancelButtonWrapper>
                    <CancelButton type="button" onClick={() => handleCancelImage(image.name)}>
                      <X color="#001C30" size={24} />
                    </CancelButton>
                  </CancelButtonWrapper>
                </ImageWrapper>
              ))}
          </AlbumImageWrapper>
        )}
      </form>
      <SubmitButtonWrapper>
        <SubmitButton type="submit" onClick={debounce(handleSubmit)}>
          앨범 생성하기
        </SubmitButton>
      </SubmitButtonWrapper>
      <ReactModal
        isOpen={isIconModalOpen}
        onRequestClose={handleIconModalClose}
        ariaHideApp={false}
        style={reactModalStyles}
      >
        <EmojiPickerComponent
          onEmojiClick={handleEmojiClick}
          onDeleteIcon={handleDeleteIcon}
          onIconModalClose={handleIconModalClose}
        />
      </ReactModal>
    </StyledAlbumCreate>
  );
};

export default AlbumCreate;

const StyledAlbumCreate = styled.main`
  padding-top: 50px;
  height: 100%;

  form {
    margin: 0 16px;
  }

  input {
    width: 100%;
    height: 50px;
    border: none;
    border-bottom: 1px solid #755bb4;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    margin-bottom: 16px;
    background: none;
    font-size: 18px;
    color: #001c30;

    &::placeholder {
      color: #001c30;
    }

    &:focus {
      outline: none;
    }
  }

  label {
    display: block;
    margin-top: 12px;
    color: #001c30;
    margin-bottom: 20px;
    border-bottom: 1px solid #755bb4;
    padding-bottom: 8px;
    font-size: 18px;
    border: none;
  }

  .image-label {
    width: 100%;
    height: 50px;
    border-radius: 6px;
    background: #755bb4;
    color: #fff;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    padding: 0;
  }

  #images {
    display: none;
  }
`;

const SubmitButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;
  max-width: 768px;
  margin: 0 auto;
  width: 100%;
  padding: 0 16px 16px;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 6px;
  background: #755bb4;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

const AlbumImageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: stretch;
  gap: 2vw;
  padding-bottom: 80px;
  overflow-y: hidden;
  height: 100%;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  img {
    width: 100%;
    height: 20vw;
    object-fit: cover;
    border-radius: 6px;

    @media screen and (min-width: 768px) {
      height: 153.59px;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  height: 20vw;

  @media screen and (min-width: 768px) {
    height: 153.59px;
  }
`;

const CancelButtonWrapper = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  background-color: #fff;
  width: 24px;
  height: 24px;
`;

const CancelButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;
