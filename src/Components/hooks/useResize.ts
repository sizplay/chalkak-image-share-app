import { useEffect, useState } from 'react';
import getImageResize from '../utils/getImageResize';

const useResize = (files: FileList | undefined) => {
  const [resizedImageFiles, setResizedImageFiles] = useState<FileList | null>(null);
  const [isFileResized, setIsFileResized] = useState<boolean>(false);

  useEffect(() => {
    if (!isFileResized && files && files.length > 0) {
      const resizedImageFiles = Array.from(files).map((file: File) => getImageResize(file));
      Promise.all(resizedImageFiles).then((resizedImages) => {
        const dataTranster = new DataTransfer();
        resizedImages.forEach((image) => {
          dataTranster.items.add(image);
        });
        setIsFileResized(true);
        setResizedImageFiles(dataTranster.files);
      });
    }
  }, [files, resizedImageFiles, isFileResized]);

  return { resizedImageFiles };
};

export default useResize;
