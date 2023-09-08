/* eslint-disable no-alert */
import { trpcClient, trpcReactClient } from '@/lib/trpc-client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { EmojiClickData, EmojiStyle } from 'emoji-picker-react';
import { imageProps } from '@/types/type';
import useResize from './useResize';
import { getHeightAndWidthFromDataUrl } from '../utils/getHeightAndWidthFromDataUrl';
import { getDate } from '../utils/getDate';
import backgroundS3Upload from '../utils/backgroundS3Upload';

const useCreateAlbum = () => {
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
  const { resizedImageFiles } = useResize(imageFiles || undefined);

  useEffect(() => {
    if (isScrolling) {
      window.scrollTo(0, document.body.scrollHeight);
      setIsScrolling(false);
    }
  }, [isScrolling]);

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

  const handleCancelImage = useCallback(
    (imageName: string) => {
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
    },
    [imageFiles],
  );

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
        uploadPath: `${userInfo?.data?.user?.id || ''}/${albumId}/`,
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
      alert('에러가 발생하였습니다. 다시 이용해주세요.');
    }
  };

  return {
    imageFiles,
    albumName,
    albumDescription,
    isIconModalOpen,
    icon,
    backgroundImage,
    isLoading,
    handleImages,
    handleAlbumName,
    handleAlbumDescription,
    handleCancelImage,
    handleIconModalOpen,
    handleIconModalClose,
    handleEmojiClick,
    handleDeleteIcon,
    handleBackgroundImages,
    handleDeleteImage,
    handleSubmit,
  };
};

export default useCreateAlbum;
