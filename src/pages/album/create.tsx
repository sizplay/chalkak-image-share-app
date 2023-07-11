/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import NavBar from '@/Components/NavBar';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Smile, X, Image } from 'lucide-react';
import ReactModal from 'react-modal';
import EmojiPicker from 'emoji-picker-react';

const AlbumCreate = () => {
  const [images, setImages] = useState<FileList | null>(null);
  const [albumName, setAlbumName] = useState<string>('');
  const [albumDescription, setAlbumDescription] = useState<string>('');
  const [isIconModalOpen, setIsIconModalOpen] = useState<boolean>(false);
  const [icon, setIcon] = useState<string>('');
  const [backgroundImage, setBackgroundImage] = useState<string>('');

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

  const handleIconModalOpen = () => {
    setIsIconModalOpen(true);
  };

  const handleIconModalClose = () => {
    setIsIconModalOpen(false);
  };

  const handleCoverImageModalOpen = () => {
    setBackgroundImage(
      'https://images.unsplash.com/photo-1655679152776-8187e897dee3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80',
    );
  };

  const handleChangeImage = () => {
    setBackgroundImage('');
  };

  const handleDeleteImage = () => {
    setBackgroundImage('');
  };

  const handleEmojiClick = (emojiObject: any) => {
    setIcon(emojiObject.getImageUrl());
    setIsIconModalOpen(false);
  };

  const handleDeleteIcon = () => {
    setIcon('');
    setIsIconModalOpen(false);
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
    alert('앨범을 생성합니다.');
  };

  return (
    <StyledAlbumCreate>
      <NavBar leftArrow={true} />
      {backgroundImage && (
        <CoverImageWrapper>
          <img src={backgroundImage} alt="cover" />
          <CoverButtonWrapper>
            <button type="button" onClick={handleChangeImage}>
              커버 변경
            </button>
            <button type="button" onClick={handleDeleteImage}>
              커버 삭제
            </button>
          </CoverButtonWrapper>
          {icon && (
            <BackgroundIconWrapper>
              <button type="button" onClick={handleIconModalOpen}>
                <img src={icon} alt="icon" />
              </button>
            </BackgroundIconWrapper>
          )}
        </CoverImageWrapper>
      )}
      <StyleComponents>
        {!icon && (
          <li>
            <button type="button" onClick={handleIconModalOpen}>
              <Smile size={24} color="#798187" />
              <p>아이콘 추가</p>
            </button>
          </li>
        )}
        {!backgroundImage && (
          <li>
            <button type="button" onClick={handleCoverImageModalOpen}>
              <Image size={24} color="#798187" />
              <p>커버 추가</p>
            </button>
          </li>
        )}
      </StyleComponents>

      {!backgroundImage && icon && (
        <IconWrapper>
          <button type="button" onClick={handleIconModalOpen}>
            <img src={icon} alt="icon" />
          </button>
        </IconWrapper>
      )}
      <h1>앨범을 만들어 주세요</h1>
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
        <EmojiPickerContainer>
          <EmojiPickerWrapper>
            <XWrapper>
              <X color="#001C30" size={24} onClick={handleIconModalClose} />
            </XWrapper>
            <DeleteEmojiWrapper>
              <button type="button" onClick={handleDeleteIcon}>
                제거
              </button>
            </DeleteEmojiWrapper>
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </EmojiPickerWrapper>
        </EmojiPickerContainer>
      </ReactModal>
    </StyledAlbumCreate>
  );
};

export default AlbumCreate;

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

const StyleComponents = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #798187;
  margin: 10px 0 30px 16px;

  li {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  button:focus {
    outline: none;
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
  border-radius: 50%;
`;

const CancelButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

const EmojiPickerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  padding: 16px;
`;

const EmojiPickerWrapper = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

const XWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 6px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  background-color: #fff;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  z-index: 101;

  button {
    border: none;
    background: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    margin-top: 20px;
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  margin-left: 16px;
  margin-bottom: 32px;
  button {
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
`;

const DeleteEmojiWrapper = styled.div`
  position: relative;
  button {
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    position: absolute;
    top: 66px;
    left: 16px;
    z-index: 101;
    font-size: 16px;
    color: #001c30;
    margin-bottom: 16px;
  }
`;

const CoverImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  position: relative;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const CoverButtonWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  background-color: #fff;
  border: none;
  background: none;
  z-index: 101;
  button {
    margin-left: 5px;
  }
`;

const BackgroundIconWrapper = styled.div`
  position: absolute;
  bottom: -25px;
  left: 10px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  background-color: #fff;
  border: none;
  background: none;
  z-index: 101;
  button {
    margin-left: 16px;
    margin-left: 5px;
    border: none;
    background: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  img {
    width: 64px;
    height: 64px;
  }
`;
