/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import NavBar from '@/Components/NavBar';
import styled from '@emotion/styled';
import ReactModal from 'react-modal';
import { X } from 'lucide-react';
import AlbumHeader from '@/Components/AlbumHeader';
import EmojiPickerComponent from '@/Components/EmojiPicker';
import debounce from 'lodash/debounce';
import { reactModalStyles } from '@/types/type';
import useCreateAlbum from '@/Components/hooks/useCreateAlbum';
import Spinner from '@/Components/utils/spinner';

const AlbumCreate = () => {
  const {
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
  } = useCreateAlbum();

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
