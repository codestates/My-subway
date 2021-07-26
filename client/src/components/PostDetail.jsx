import React, { useState } from 'react';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltTwoTone';

import styled from 'styled-components';
import axios from 'axios';

const url = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;

const ModalArea = styled.div`
  position: absolute;
  top: -50%;
  left: 0;
  height: 100%;
  text-align: center;
  z-index: 100;
`;

const Modalback = styled.div`
  z-index: -1;
  position: fixed;
  margin: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: grid;
  place-items: center;
`;

const ModalView = styled.div`
  z-index: 998;
  width: 75vw;
  height: 75vh;
  margin: 0px;
  padding: 1rem;
  background: white;
  box-shadow: 0 0 15px #333;
  position: fixed;
  margin: 180px auto;
  left: 0;
  right: 0;
  overflow: auto;
`;

const MarginDiv = styled.div`
  display: flex;
`;

const MainImg = styled.img`
  width: 20vw;
  height: 20vh;
`;

const MenuImg = styled.img`
  width: 10vw;
  height: 10vh;
`;
const TitleDiv = styled.div`
  font-weight: bold;
  font-size: 150%;
`;
const ContentDiv = styled.div`
  font-weight: bold;
  font-size: 150%;
`;
const CategorySpan = styled.span`
  font-weight: bold;
  font-size: 120%;
`;

const LikeButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

function PostDetail({ postDetail, closePostDetail, handleClickLike, likes, liked }) {
  return (
    <ModalArea>
      <MarginDiv>
        <ModalView>
          <TitleDiv>{postDetail.title}</TitleDiv>
          <div>{postDetail.username}</div>
          <div>
            <MainImg src={postDetail.menu.main[0].img_url} />
            <span>{postDetail.menu.main[0].name}</span>
          </div>
          <div>
            <CategorySpan>빵</CategorySpan>
            <hr />
            {postDetail.menu.bread.map((item) => {
              return (
                <div>
                  <MenuImg src={item.img_url} />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
          <div>
            <CategorySpan>치즈</CategorySpan>
            <hr />
            {postDetail.menu.cheese.map((item) => {
              return (
                <div>
                  <MenuImg src={item.img_url} />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>

          <div>
            <CategorySpan>야채</CategorySpan>
            <hr />
            {postDetail.menu.vege.map((item) => {
              return (
                <div>
                  <MenuImg src={item.img_url} />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>

          <div>
            <CategorySpan>소스</CategorySpan>
            <hr />
            {postDetail.menu.sauce.map((item) => {
              return (
                <div>
                  <MenuImg src={item.img_url} />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
          <div>
            <CategorySpan>추가메뉴</CategorySpan>
            <hr />
            {!!postDetail.menu.addable.length ? (
              postDetail.menu.addable.map((item) => {
                return (
                  <div>
                    <MenuImg src={item.img_url} />
                    <span>{item.name}</span>
                  </div>
                );
              })
            ) : (
              <div>선택 안 함</div>
            )}
          </div>

          <div>
            <CategorySpan>고기추가</CategorySpan>
            <hr />
            {!!postDetail.menu.addmeat.length ? (
              postDetail.menu.addmeat.map((item) => {
                return (
                  <div>
                    <MenuImg src={item.img_url} />
                    <span>{item.name}</span>
                  </div>
                );
              })
            ) : (
              <div>선택 안 함</div>
            )}
          </div>
          <ContentDiv>
            <hr />
            {postDetail.content}
            <hr />
          </ContentDiv>
          <LikeButton onClick={handleClickLike}>
            {!!liked ? <ThumbUpAltTwoToneIcon style={{ color: 'red' }} /> : <ThumbUpAltOutlinedIcon />}
            <div>{likes}</div>
          </LikeButton>
        </ModalView>
        <Modalback onClick={() => closePostDetail()}></Modalback>
      </MarginDiv>
    </ModalArea>
  );
}

export default PostDetail;
