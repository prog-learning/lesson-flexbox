import React from 'react';
import styled from 'styled-components';

export const Children = ({ num }) => {
  return (
    <StyledChildren>
      <div className='num'>{num}</div>
      <img src='/mask_man.png' />
    </StyledChildren>
  );
};

export const StyledChildren = styled.div`
  width: 20vw;
  height: 20vw;
  max-width: 200px;
  max-height: 200px;
  background-color: peru;
  border-radius: 16px;
  position: relative;
  margin: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .num {
    display: block;
    text-align: center;
    font-size: min(100px,15vw);
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

