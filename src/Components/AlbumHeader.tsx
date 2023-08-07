/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from '@emotion/styled';
import { Smile, Image as LucideImage } from 'lucide-react';

interface AlbumHeaderProps {
  onIconModalOpen?: () => void;
  onChangeImage?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteImage?: () => void;
  backgroundImage: string | null;
  icon: string | null;
  showEditButton?: boolean;
  showDeleteButton?: boolean;
  isNomalPage?: boolean;
}

const AlbumHeader = ({
  onIconModalOpen,
  onChangeImage,
  onDeleteImage,
  backgroundImage,
  icon,
  showEditButton = false,
  showDeleteButton = false,
  isNomalPage = false,
}: AlbumHeaderProps) => {
  return (
    <AlbumHeaderContainer>
      {backgroundImage && (
        <CoverImageWrapper>
          <img src={backgroundImage} alt="cover" />
          <CoverButtonWrapper>
            {showEditButton && (
              // <button type="button" onClick={onChangeImage}>
              //   커버 변경
              // </button>
              <div>
                <label htmlFor="files">커버 변경</label>
                <input id="files" type="file" multiple accept="image/*" onChange={onChangeImage} />
              </div>
            )}
            {showDeleteButton && (
              <div>
                <button type="button" onClick={onDeleteImage}>
                  커버 삭제
                </button>
              </div>
            )}
          </CoverButtonWrapper>
          {icon && (
            <BackgroundIconWrapper>
              <button type="button" onClick={onIconModalOpen}>
                <img src={icon} alt="icon" />
              </button>
            </BackgroundIconWrapper>
          )}
        </CoverImageWrapper>
      )}
      <StyleComponents>
        {!isNomalPage && !icon && (
          <li>
            <button type="button" onClick={onIconModalOpen}>
              <Smile size={24} color="#001c30" />
              <p>아이콘 추가</p>
            </button>
          </li>
        )}
        {!isNomalPage && !backgroundImage && (
          <li>
            <LabelWrapper>
              <LucideImage size={24} color="#001c30" />
              <label htmlFor="files">커버 추가</label>
              <input id="files" type="file" multiple accept="image/*" onChange={onChangeImage} />
            </LabelWrapper>
          </li>
        )}
      </StyleComponents>

      {!backgroundImage && icon && (
        <IconWrapper>
          <button type="button" onClick={onIconModalOpen}>
            <img src={icon} alt="icon" />
          </button>
        </IconWrapper>
      )}
    </AlbumHeaderContainer>
  );
};

export default AlbumHeader;

const AlbumHeaderContainer = styled.section`
  width: 100%;
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
    /* margin-top: 16px; */

    p {
      font-size: 15px;
      color: #001c30;
    }

    input {
      background: red;
      width: 100px;
      height: 100px;
    }
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

const LabelWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  vertical-align: middle;

  label {
    transform: translateY(1px);
    vertical-align: middle;
    font-size: 16px;
    color: #001c30;
    margin: 0;
    padding: 0;
  }

  input {
    display: none;
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
  z-index: 100;

  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;

  div {
    margin-left: 5px;
    padding: 3px 6px;
    border-radius: 4px;
    font-size: 14px;
    color: #fff;
    background-color: #755bb4;
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    height: 23px;
    display: flex;
    align-items: center;
    gap: 4px;

    button {
      margin: 0;
      padding: 0;
      font-size: 14px;
      color: #fff;
      background-color: #755bb4;
      border: none;
    }

    label {
      margin: 0;
      padding: 0;
      font-size: 14px;
      color: #fff;
      background-color: #755bb4;
      border: none;
    }

    input {
      display: none;
    }
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
  z-index: 100;
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
