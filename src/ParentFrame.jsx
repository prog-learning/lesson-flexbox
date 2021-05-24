import React from 'react';
import styled from 'styled-components';

export const ParentFrame = ({ children, JC, AC, FD, FW }) => {
  console.log(AC);
  return (
    <StyledParentFrame JC={JC} AC={AC} FD={FD} FW={FW}>
      {children}
    </StyledParentFrame>
  );
};

export const StyledParentFrame = styled.div`
  display: flex;
  width: 90vw;
  height: 90vw;
  max-width: 900px;
  max-height: 900px;
  background-color: skyblue;
  margin: 24px auto;

  justify-content: ${({ JC }) => JC};
  align-content: ${({ AC }) => AC};
  flex-direction: ${({ FD }) => FD};
  flex-wrap: ${({ FW }) => FW};
`;
