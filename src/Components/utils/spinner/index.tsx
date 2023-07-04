import styled from '@emotion/styled';
import React from 'react';

interface ISpinnerProps {
  color?: 'gray';
}

const Spinner = ({ color = 'gray' }: ISpinnerProps) => {
  return (
    <StyledSpinner>
      <div className={`mx-auto lds-spinner lds-spinner-${color}`}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </StyledSpinner>
  );
};

export default React.memo(Spinner);

const StyledSpinner = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
