import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Link, useHistory } from 'react-router-dom';

const AsideStyled = styled.div`
  position: fixed;
  bottom: 15%;
  left: 49%;
  margin: 0 0 0 635px;
  z-index: 996;
`;

const LogImg = styled.img`
  display: block;
  width: 110px;
  height: 113px;
  overflow: hidden;
`;

function PostButton({ isLogIn }) {
  return (
    <div>
      {isLogIn ? (
        <AsideStyled>
          <Link to="/post">
            <LogImg src="../imageFile/subway-Log.png" alt="log" />
          </Link>
        </AsideStyled>
      ) : null}
    </div>
  );
}

export default PostButton;
