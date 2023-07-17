/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import NavBar from '@/Components/NavBar';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import ReactModal from 'react-modal';
import { EmojiClickData, EmojiStyle } from 'emoji-picker-react';
import { trpcReactClient } from '@/lib/trpc-client';
import axios from 'axios';
import { imageProps } from '@/pages/create';
import AlbumHeader from '../AlbumHeader';
import EmojiPickerComponent from '../EmojiPicker';
import { convertURLtoFile } from '../utils/convertURLtoFile';
import { getDate } from '../utils/getDate';
import { getHeightAndWidthFromDataUrl } from '../utils/getHeightAndWidthFromDataUrl';
import { getRandomBackgroundImage } from '../utils/backgroundImages';

interface EditAlbumProps {
  albumData: {
    title: string;
    description: string;
    albumId: number;
    album: {
      original: string;
      src: string;
      width: number;
      height: number;
      imageId: number;
    }[];
    icon: string;
    backgroundImage: string;
  };
  AlbumImagesRefetch: () => void;
}

const EditAlbum = ({
  albumData: { title, description, icon, backgroundImage, album, albumId },
  AlbumImagesRefetch,
}: EditAlbumProps) => {
  const [images, setImages] = useState<FileList | null>(null);
  const [updatingImages, setUpdatingImages] = useState<FileList | null>(null);
  const [albumName, setAlbumName] = useState<string>(title);
  const [albumDescription, setAlbumDescription] = useState<string>(description);
  const [isIconModalOpen, setIsIconModalOpen] = useState<boolean>(false);
  const [iconUrl, setIconUrl] = useState<string>(icon);
  const [background, setBackground] = useState<string>(backgroundImage);
  const router = useRouter();

  const insertImagesMutation = trpcReactClient.insertImages.useMutation({
    onSuccess: () => AlbumImagesRefetch(),
  });
  const updateAlbumMutation = trpcReactClient.updateAlbum.useMutation();
  const deleteImageMutation = trpcReactClient.deleteImage.useMutation({
    onSuccess: () => AlbumImagesRefetch(),
  });

  useEffect(() => {
    if (album && album.length > 0) {
      const albumImages = new DataTransfer();
      Promise.all(
        album.map(async (image) => {
          const file = await convertURLtoFile(image.src);
          albumImages.items.add(file);
        }),
      ).then(() => {
        setImages(albumImages.files);
      });
    }
  }, [album]);

  const handleIconModalClose = () => {
    setIsIconModalOpen(false);
  };

  const handleCoverImageModalOpen = () => {
    const backgroundImage = getRandomBackgroundImage();
    setBackground(backgroundImage);
  };

  const handleChangeImage = () => {
    const backgroundImage = getRandomBackgroundImage();
    setBackground(backgroundImage);
  };

  const handleDeleteImage = () => {
    setBackground('');
  };

  const handleAlbumName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlbumName(e.target.value);
  };

  const handleAlbumDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlbumDescription(e.target.value);
  };

  const handleImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    setUpdatingImages(files);
    setImages((prev) => {
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

  const handleIconModalOpen = () => {
    setIsIconModalOpen(true);
  };

  const handleEmojiClick = (emojiObject: EmojiClickData) => {
    setIconUrl(emojiObject.getImageUrl(EmojiStyle.NATIVE));
    setIsIconModalOpen(false);
  };

  const handleDeleteIcon = () => {
    setIconUrl('');
    setIsIconModalOpen(false);
  };

  const handleCancelImage = (imageName: string) => {
    const dataTranster = new DataTransfer();
    if (images) {
      Array.from(images)
        .filter((image) => {
          return imageName !== image.name;
        })
        .forEach((image) => {
          dataTranster.items.add(image);
        });
    }
    setImages(dataTranster.files);
  };

  const handleSubmit = async () => {
    if (!images) {
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
      // 1. 앨범 수정
      updateAlbumMutation.mutate({
        albumId,
        title: albumName,
        subtitle: albumDescription,
        icon: iconUrl,
        backgroundImage: background,
      });

      // 2. 앨범 이미지 수정
      const newImages: imageProps[] = [];

      // 2-1. 신규 이미지 업로드
      if (updatingImages && updatingImages?.length > 0) {
        const date = getDate();
        Array.from(updatingImages).forEach(async (image) => {
          // width height 구하기
          const fileAsDataURL = window.URL.createObjectURL(image);
          const dimension = await getHeightAndWidthFromDataUrl(fileAsDataURL);
          const { width, height } = dimension;

          // 1. 이미지 파일 s3에 업로드
          const s3uploadData = await axios.post('/api/upload', {
            name: `${date}/${image.name}~${new Date().getTime()}`,
            type: image.type,
          });
          const { url } = s3uploadData.data;
          await axios.put(url, image, {
            headers: {
              'Content-Type': image.type,
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
            size: image.size || 0,
          };
          newImages.push(imageData);

          if (newImages.length === updatingImages.length) {
            insertImagesMutation.mutate(newImages);
          }
        });
      }

      // 기존 앨범에서 삭제된 이미지가 있는지 확인
      const currentImages = Array.from(images).map((image) => image.name);
      const currentAlbum = album.map((image) => {
        return {
          src: image?.src?.slice(image.src.lastIndexOf('/') + 1),
          imageId: image.imageId,
        };
      });

      const deletedImages = currentAlbum.filter((image) => {
        return !currentImages.includes(image.src);
      });

      if (deletedImages.length > 0) {
        await Promise.all(
          deletedImages.map(async (image) => {
            deleteImageMutation.mutate(image.imageId);
          }),
        );
      }
      alert('앨범이 수정되었습니다.');
      router.push(`/album/${albumId}`);
    } catch (e) {
      console.log(e);
      alert('앨범 수정에 실패했습니다.');
    }
  };

  return (
    <StyledAlbumCreate>
      <NavBar leftArrow={true} />
      <AlbumHeader
        onIconModalOpen={handleIconModalOpen}
        onCoverImageModalOpen={handleCoverImageModalOpen}
        onChangeImage={handleChangeImage}
        onDeleteImage={handleDeleteImage}
        backgroundImage={background}
        icon={iconUrl}
        showEditButton={true}
        showDeleteButton={true}
      />
      <h1>앨범을 수정해 주세요</h1>
      <form>
        <input type="text" placeholder="앨범 이름을 입력해주세요." value={albumName} onChange={handleAlbumName} />
        <input
          type="text"
          placeholder="앨범 설명을 입력해주세요."
          value={albumDescription}
          onChange={handleAlbumDescription}
        />

        <label htmlFor="images">이미지를 선택해주세요.</label>
        <input id="images" type="file" multiple accept="image/*" onChange={handleImages} />

        {images && (
          <AlbumImageWrapper>
            {Array.from(images).map((image) => (
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
        <SubmitButton type="submit" onClick={handleSubmit}>
          앨범 수정하기
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

export default EditAlbum;

const StyledAlbumCreate = styled.main`
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
    border-bottom: 1px solid #176b87;
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
    border-bottom: 1px solid #176b87;
    padding-bottom: 8px;
    font-size: 18px;
  }

  #images {
    display: none;
  }
`;

const SubmitButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0 16px 16px;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 6px;
  background: #001c30;
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
`;

const CancelButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;
