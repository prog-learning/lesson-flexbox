import React from 'react';
import styled from 'styled-components';

export const Button = ({ onClick, disabled, children }) => {

  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: palegreen;
  margin: 0 8px;
  padding: 8px;
  border-radius: 8px;
  &:disabled {
    background-color: salmon;
    color: #333;
  }
`;
