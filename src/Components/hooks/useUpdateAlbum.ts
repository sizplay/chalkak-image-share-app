/* eslint-disable no-alert */
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { trpcReactClient } from '@/lib/trpc-client';
import { imageProps } from '@/types/type';
import { EmojiClickData, EmojiStyle } from 'emoji-picker-react';
import axios from 'axios';
import useResize from './useResize';
import { convertURLtoFile } from '../utils/convertURLtoFile';
import { getDate } from '../utils/getDate';
import { getHeightAndWidthFromDataUrl } from '../utils/getHeightAndWidthFromDataUrl';
import backgroundS3Upload from '../utils/backgroundS3Upload';

interface useUpdateAlbumProps {
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
    uploadPath: string;
  };
  albumRefetch: () => void;
}

interface DeleteImageProps {
  key: string;
}

const useUpdateAlbum = ({ albumData, albumRefetch }: useUpdateAlbumProps) => {
  const { title, description, albumId, album, icon, backgroundImage } = albumData;
  const [albumName, setAlbumName] = useState<string>(title);
  const [albumDescription, setAlbumDescription] = useState<string>(description);
  const [iconUrl, setIconUrl] = useState<string>(icon);
  const [background, setBackground] = useState<string>(backgroundImage);
  const [images, setImages] = useState<FileList | null>(null);
  const [updatingImages, setUpdatingImages] = useState<FileList | null>(null);
  const [isIconModalOpen, setIsIconModalOpen] = useState<boolean>(false);
  const [backfroundFile, setBackfroundFile] = useState<FileList | null>(null);
  const [isFileResized, setIsFileResized] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  const { resizedImageFiles } = useResize(updatingImages || undefined);

  const router = useRouter();
  const userInfo = useSession();

  const { refetch: getAlbumListRefetch } = trpcReactClient.getAlbumList.useQuery();

  const insertImagesMutation = trpcReactClient.insertImages.useMutation<{
    input: {
      albumId: number;
      images: FileList;
    };
    output: {
      images: imageProps[];
    };
  }>({
    onSuccess: () => {
      albumRefetch();
      getAlbumListRefetch();
    },
    onError: () => {
      alert('이미지 업로드에 실패했습니다.');
    },
  });

  const updateAlbumMutation = trpcReactClient.updateAlbum.useMutation({
    onSuccess: () => {
      albumRefetch();
      getAlbumListRefetch();
    },
    onError: () => {
      alert('앨범 수정에 실패했습니다.');
    },
  });

  const deleteImageMutation = trpcReactClient.deleteImage.useMutation({
    onSuccess: () => {
      albumRefetch();
      getAlbumListRefetch();
    },
    onError: () => {
      alert('이미지 삭제에 실패했습니다.');
    },
  });

  useEffect(() => {
    setBackground(backgroundImage);
    setAlbumName(title);
    setAlbumDescription(description);
    setIconUrl(icon);
  }, [backgroundImage, description, icon, title]);

  useEffect(() => {
    if (!isFileResized && resizedImageFiles) {
      setUpdatingImages(resizedImageFiles);
      setIsFileResized(true);
    }
  }, [isFileResized, resizedImageFiles]);

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

  useEffect(() => {
    if (isScrolling) {
      window.scrollTo(0, document.body.scrollHeight);
      setIsScrolling(false);
    }
  }, [isScrolling]);

  const handleIconModalClose = () => {
    setIsIconModalOpen(false);
  };

  const handleBackgroundImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      setBackground(URL.createObjectURL(files[0]));
      setBackfroundFile(files);
    }
  };

  const handleDeleteImage = () => {
    setBackground('');
  };

  const handleIconModalOpen = () => {
    setIsIconModalOpen(true);
  };

  const handleAlbumName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlbumName(e.target.value);
  };

  const handleAlbumDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlbumDescription(e.target.value);
  };

  const handleEmojiClick = (emojiObject: EmojiClickData) => {
    setIconUrl(emojiObject.getImageUrl(EmojiStyle.NATIVE));
    setIsIconModalOpen(false);
  };

  const handleDeleteIcon = () => {
    setIconUrl('');
    setIsIconModalOpen(false);
  };

  const handleImages = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
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
    setIsScrolling(true);
  }, []);

  const handleCancelImage = useCallback(
    async (imageName: string) => {
      const dataTranster = new DataTransfer();
      const keys: DeleteImageProps[] = [];
      if (images) {
        Array.from(images)
          .filter((image) => {
            if (imageName === image.name) {
              keys.push({ key: image.name });
            }
            return imageName !== image.name;
          })
          .forEach((image) => {
            dataTranster.items.add(image);
          });
        const deletedImage = album.find((image) => image.src.includes(imageName));

        if (keys.length > 0) {
          const res = await axios.post('/api/delete', {
            data: { keys: [{ Key: `${deletedImage?.src.split('run/')[1]}` }] },
          });
          if (res.status === 200) {
            axios.get(`${deletedImage?.src}?dispose=1`);
            if (deletedImage) {
              deleteImageMutation.mutate(deletedImage.imageId);
            }
          }
        }
      }
      setImages(dataTranster.files);
    },
    [album, deleteImageMutation, images],
  );

  const handleSubmit = useCallback(async () => {
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
      setIsLoading(true);

      // 0. 백그라운드 이미지 s3 업로드
      let backgroundPath = '';
      if (backfroundFile) {
        backgroundPath = await backgroundS3Upload(backfroundFile[0], albumId, userInfo?.data?.user?.id || '');
      }

      // 1. 앨범 수정
      updateAlbumMutation.mutate({
        albumId,
        title: albumName,
        subtitle: albumDescription,
        icon: iconUrl,
        backgroundImage: backgroundPath,
      });

      // 2. 앨범 이미지 수정
      const newImages: imageProps[] = [];

      // 2-1. 신규 이미지 업로드
      if (updatingImages && updatingImages?.length > 0) {
        const date = getDate();
        Array.from(updatingImages).forEach(async (imageFile) => {
          // width height 구하기
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

          if (newImages.length === updatingImages.length) {
            insertImagesMutation.mutate(newImages);
          }
        });
      }

      setIsLoading(false);
      alert('앨범이 수정되었습니다.');
      router.push(`/album/${albumId}`);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
      alert('앨범 수정에 실패했습니다.');
    }
  }, [
    albumDescription,
    albumId,
    albumName,
    backfroundFile,
    iconUrl,
    images,
    insertImagesMutation,
    router,
    updateAlbumMutation,
    updatingImages,
    userInfo?.data?.user?.id,
  ]);

  return {
    albumName,
    albumDescription,
    iconUrl,
    background,
    images,
    isIconModalOpen,
    isLoading,
    handleIconModalClose,
    handleBackgroundImages,
    handleDeleteImage,
    handleIconModalOpen,
    handleAlbumName,
    handleAlbumDescription,
    handleEmojiClick,
    handleDeleteIcon,
    handleImages,
    handleCancelImage,
    handleSubmit,
  };
};

export default useUpdateAlbum;
