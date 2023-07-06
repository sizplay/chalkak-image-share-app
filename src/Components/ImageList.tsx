import styled from '@emotion/styled';
import { useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { CustomImage, images } from './images';

interface IImage {
  data: IImageData;
}

interface IImageData {
  title: string;
  description: string;
  album: CustomImage[];
}

const ImageList = (props: IImage) => {
  const { data } = props;
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div>
      <TitleWrapper>
        <h1>{data?.title}</h1>
        <p>{data?.description}</p>
      </TitleWrapper>
      <Gallery images={images} onClick={handleClick} enableImageSelection={false} />
      {!!currentImage && (
        <Lightbox
          mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  );
};

export default ImageList;

const TitleWrapper = styled.div`
  margin: 10px 16px;
`;
