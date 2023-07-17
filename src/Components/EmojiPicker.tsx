import styled from '@emotion/styled';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { X } from 'lucide-react';

interface EmojiPickerProps {
  onIconModalClose: () => void;
  onDeleteIcon: () => void;
  onEmojiClick: (emojiObject: EmojiClickData) => void;
}

const EmojiPickerComponent = ({ onIconModalClose, onDeleteIcon, onEmojiClick }: EmojiPickerProps) => {
  return (
    <EmojiPickerContainer>
      <EmojiPickerWrapper>
        <XWrapper>
          <X color="#001C30" size={24} onClick={onIconModalClose} />
        </XWrapper>
        <DeleteEmojiWrapper>
          <button type="button" onClick={onDeleteIcon}>
            제거
          </button>
        </DeleteEmojiWrapper>
        <EmojiPicker onEmojiClick={onEmojiClick} autoFocusSearch={false} />
      </EmojiPickerWrapper>
    </EmojiPickerContainer>
  );
};

export default EmojiPickerComponent;

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
