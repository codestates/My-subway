import React from 'react';
import styled from 'styled-components';

const AsideStyled = styled.div`
  position: fixed;
  bottom: 110px;
  left: 49%;
  margin: 0 0 0 635px;
  z-index: 999;
`;

const LogImg = styled.img`
  display: block;
  width: 110px;
  height: 113px;
  overflow: hidden;
`;

function PostButton() {
  const openPost = () => {
    console.log('열려라 참깨');
  };

  return (
    <AsideStyled>
      <LogImg src="../imageFile/subway-Log.png" alt="log" onClick={openPost} />
    </AsideStyled>
  );
}

export default PostButton;
