/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import NavBar from '@/Components/NavBar';
import styled from '@emotion/styled';
import { useState } from 'react';
import { X } from 'lucide-react';

interface EditAlbumProps {
  albumData: {
    title: string;
    description: string;
    // imageData: FileList | null;
  };
}

const EditAlbum = ({ albumData: { title, description } }: EditAlbumProps) => {
  const [images, setImages] = useState<FileList | null>(null);
  const [albumName, setAlbumName] = useState<string>(title);
  const [albumDescription, setAlbumDescription] = useState<string>(description);

  const handleAlbumName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlbumName(e.target.value);
  };

  const handleAlbumDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlbumDescription(e.target.value);
  };

  const handleImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImages(e.target.files);
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

  const handleSubmit = () => {
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
    alert('앨범을 수정합니다.');
  };

  return (
    <StyledAlbumCreate>
      <NavBar leftArrow={true} />
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
              <>
                <ImageWrapper>
                  <img key={image.name} src={URL.createObjectURL(image)} alt="album" />
                  <CancelButtonWrapper>
                    <CancelButton type="button" onClick={() => handleCancelImage(image.name)}>
                      <X color="#FFF" size={24} />
                    </CancelButton>
                  </CancelButtonWrapper>
                </ImageWrapper>
              </>
            ))}
          </AlbumImageWrapper>
        )}
      </form>
      <SubmitButtonWrapper>
        <SubmitButton type="submit" onClick={handleSubmit}>
          앨범 수정하기
        </SubmitButton>
      </SubmitButtonWrapper>
    </StyledAlbumCreate>
  );
};

export default EditAlbum;

const StyledAlbumCreate = styled.main`
  padding-top: 70px;
  height: 100vh;
  margin: 0 16px;

  h1 {
    font-size: 24px;
    color: #001c30;
    margin-bottom: 24px;
  }

  input {
    width: 100%;
    height: 50px;
    border: none;
    border-bottom: 1px solid #176b87;
    margin-bottom: 16px;
    background: none;
    padding: 0 8px;
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
    padding-left: 8px;
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
