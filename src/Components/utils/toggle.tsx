import styled from '@emotion/styled';

interface ToggleProps {
  isToggleOn: boolean;
  handleToggleOn: (isToggleOn: boolean) => void;
  toggleName: string;
}

const Toggle = ({ isToggleOn, handleToggleOn, toggleName }: ToggleProps) => {
  return (
    <ToggleContainer onClick={() => handleToggleOn(isToggleOn)}>
      <div className={`toggle-container ${isToggleOn ? 'toggle--checked' : 'toggle-unchecked'}`}>
        <p>{toggleName}</p>
      </div>
      <div className={`toggle-circle ${isToggleOn ? 'toggle--checked' : null}`} />
    </ToggleContainer>
  );
};

export default Toggle;

const ToggleContainer = styled.div`
  position: relative;
  margin-top: 8rem;
  left: 47%;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  > .toggle-container {
    width: 80px;
    height: 36px;
    border-radius: 30px;
    background-color: rgb(233, 233, 234);

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    box-sizing: border-box;

    > p {
      margin-left: 8px;
      font-size: 14px;
      font-weight: bold;
      color: #001c30;
    }
  }

  > .toggle--checked {
    background-color: #64ccc5;
    transition: 0.5s;
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 33px;
    height: 33px;
    border-radius: 50%;
    background-color: #176b87;
    transition: 0.5s;
  }
  > .toggle--checked {
    left: 46.5px;
    transition: 0.5s;
  }

  > .toggle-unchecked {
    transition: 0.7s;

    p {
      transform: translateX(28px);
    }
  }
`;
