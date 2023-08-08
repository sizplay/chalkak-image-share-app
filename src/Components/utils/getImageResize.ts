import imageCompression from 'browser-image-compression';

const getImageResize = async (image: File) => {
  if (image.size < 300000) {
    const resizingBlob = await imageCompression(image, { maxSizeMB: 0.3, maxWidthOrHeight: 1920, useWebWorker: true });
    const resizingFile = new File([resizingBlob], image.name, { type: image.type });
    return resizingFile;
  }
  return image;
};

export default getImageResize;
