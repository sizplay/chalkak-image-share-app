/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import NavBar from '@/Components/NavBar';
import styled from '@emotion/styled';
import { useState } from 'react';
import ReactModal from 'react-modal';
import { trpcClient } from '@/lib/trpc-client';
import { useRouter } from 'next/router';
import { X } from 'lucide-react';
import axios from 'axios';
import { getHeightAndWidthFromDataUrl } from '@/Components/utils/getHeightAndWidthFromDataUrl';
import { getDate } from '@/Components/utils/getDate';
import AlbumHeader from '@/Components/AlbumHeader';
import EmojiPickerComponent from '@/Components/EmojiPicker';
import { EmojiClickData, EmojiStyle } from 'emoji-picker-react';
import { getRandomBackgroundImage } from '@/Components/utils/backgroundImages';
import debounce from 'lodash/debounce';
import Spinner from '@/Components/utils/spinner';
import { useSession } from 'next-auth/react';

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(-1);

  const router = useRouter();
  const userInfo = useSession();

  const handleAlbumName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlbumName(e.target.value);
  };

  const handleAlbumDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlbumDescription(e.target.value);
  };

  const handleImages = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleChangeImage = () => {
    const { image, index } = getRandomBackgroundImage(currentImageIndex);
    setCurrentImageIndex(index);
    setBackgroundImage(image);
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
        user_id: userInfo?.data?.user?.id || '',
        icon,
        backgroundImage,
      });
      const albumId = returnedAlbumData?.album_id;
      const newImages: imageProps[] = [];

      // 2. 이미지 업로드
      if (albumId !== 0 && imageFiles) {
        const date = getDate();

        Array.from(imageFiles).forEach(async (imageFile: File) => {
          const fileAsDataURL = window.URL.createObjectURL(imageFile);
          const dimension = await getHeightAndWidthFromDataUrl(fileAsDataURL);
          const { width, height } = dimension;

          const s3uploadData = await axios.post('/api/upload', {
            name: `${date}/${imageFile.name}~${new Date().getTime()}`,
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
              router.push(`/album/${albumId}`);
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
        onChangeImage={handleChangeImage}
        onDeleteImage={handleDeleteImage}
        backgroundImage={backgroundImage}
        icon={icon}
        showEditButton={true}
        showDeleteButton={true}
      />
      <h1>앨범을 만들어 주세요</h1>
      <form>
        <input type="text" placeholder="앨범 이름을 입력해주세요." value={albumName} onChange={handleAlbumName} />
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
            {Array.from(imageFiles).map((image) => (
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
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 100,
          },
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            border: 'none',
            background: 'none',
            padding: 0,
            margin: 0,
          },
        }}
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
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding-top: 50px;
  height: 100vh;

  form {
    margin: 0 16px;
  }
  h1 {
    font-size: 24px;
    color: #001c30;
    margin: 0 16px;
    margin-bottom: 24px;
  }

  input {
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #755bb4;
    margin-bottom: 16px;
    background: none;
    font-size: 16px;
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
    font-size: 16px;
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
  width: 100%;
  padding: 0 16px 16px;
  max-width: 768px;
  margin: 0 auto;
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
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
  padding-bottom: 80px;
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 6px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
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
  border-radius: 50%;
`;

const CancelButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;
