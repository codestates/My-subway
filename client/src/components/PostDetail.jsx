import React, { useState } from 'react';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltTwoTone';
import PopUp from './PopUp';
import styled from 'styled-components';
import axios from 'axios';

const url = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;

const ModalArea = styled.div`
  font-family: font-css;
  position: fixed;
  top: 0%;
  left: 0;
  height: 100%;
  z-index: 997;
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
  background: white;
  border-radius: 1rem;
  box-shadow: 0 0 15px #333;
  position: fixed;
  margin: 7% auto;
  left: 0;
  right: 0;
  overflow: auto;
`;

const MarginDiv = styled.div`
  display: flex;
`;

const MenuImg = styled.img`
  height: 70%;
  margin-bottom: -5%;
`;
const LikeButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

const MenuDiv = styled.div`
  float: left;
  height: 100%;
  width: 60%;
  border-right: 0.2px solid #cccccc;
  text-align: center;
`;
const TextDiv = styled.div`
  float: right;
  height: 100%;
  width: 40%;
  font-size: 120%;
`;

const MainImg = styled.img`
  height: 80%;
  margin-bottom: -3%;
`;
const MainDiv = styled.div`
  height: 30%;
  font-size: 220%;
`;
const IngredientDivOdd = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 11.6%;
  background-color: #cccccc;
  overflow-x: auto;
  font-size: 120%;
`;

const IngredientDivEven = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 11.6%;
  overflow-x: auto;
  font-size: 120%;
`;
const TitleDiv = styled.div`
  text-align: center;
  border-bottom: 1px solid #cccccc;
  height: 20%;
  font-weight: bold;
  font-size: 2vw;
`;

const UsernameDiv = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
  font-size: 1.2vw;
`;

const ContentDiv = styled.div`
  height: 58.1%;
  padding: 5%;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  font-size: 1.3vw;
`;

const LikeDiv = styled.div`
  height: 11.9%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2vw;
`;

function PostDetail({ postDetail, closePostDetail, handleClickLike, likes, liked, isLogIn, userInfo }) {
  const [successSignUp, setSuccessSignUp] = useState(false);

  const handleDeletePost = async (id) => {
    await axios.delete(`${url}posts/${id}`);
    setSuccessSignUp(true);
  };
  return (
    <ModalArea>
      <MarginDiv>
        <ModalView>
          <MenuDiv>
            <MainDiv>
              <MainImg src={postDetail.menu.main[0].img_url} />
              <div>{postDetail.menu.main[0].name}</div>
            </MainDiv>
            <IngredientDivOdd>
              {postDetail.menu.bread.map((item) => {
                return (
                  <div>
                    <MenuImg src={item.img_url} />
                    <div>{item.name}</div>
                  </div>
                );
              })}
            </IngredientDivOdd>
            <IngredientDivEven>
              {postDetail.menu.cheese.map((item) => {
                return (
                  <div>
                    <MenuImg src={item.img_url} />
                    <div>{item.name}</div>
                  </div>
                );
              })}
            </IngredientDivEven>
            <IngredientDivOdd>
              {postDetail.menu.vege.map((item) => {
                return (
                  <div>
                    <MenuImg src={item.img_url} />
                    <div>{item.name}</div>
                  </div>
                );
              })}
            </IngredientDivOdd>
            <IngredientDivEven>
              {postDetail.menu.sauce.map((item) => {
                return (
                  <div>
                    <MenuImg src={item.img_url} />
                    <div>{item.name}</div>
                  </div>
                );
              })}
            </IngredientDivEven>
            <IngredientDivOdd>
              {!!postDetail.menu.addable.length
                ? postDetail.menu.addable.map((item) => {
                    return (
                      <div>
                        <MenuImg src={item.img_url} />
                        <div>{item.name}</div>
                      </div>
                    );
                  })
                : null}
            </IngredientDivOdd>
            <IngredientDivEven style={{ alignItems: 'center' }}>
              {!!postDetail.menu.addmeat.length ? (
                postDetail.menu.addmeat.map((item) => {
                  return (
                    <div>
                      <div>{item.name}</div>
                    </div>
                  );
                })
              ) : (
                <div>고기추가 선택 안함</div>
              )}
            </IngredientDivEven>
          </MenuDiv>
          <TextDiv>
            <TitleDiv>
              <div style={{ top: '35%', position: 'relative' }}>{postDetail.title}</div>
            </TitleDiv>
            <UsernameDiv>
              <div>{postDetail.username}</div>
              {isLogIn ? (
                postDetail.username === userInfo.username ? (
                  <div
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      handleDeletePost(postDetail.id);
                    }}>
                    삭제
                  </div>
                ) : null
              ) : null}
            </UsernameDiv>
            <ContentDiv>{postDetail.content}</ContentDiv>
            <LikeDiv>
              <LikeButton onClick={handleClickLike}>
                {!!liked ? (
                  <ThumbUpAltTwoToneIcon style={{ color: 'red', fontSize: '3vh' }} />
                ) : (
                  <ThumbUpAltOutlinedIcon style={{ fontSize: '3vh' }} />
                )}
                <span style={{ marginLeft: '0.3vw' }}>{likes}</span>
              </LikeButton>
            </LikeDiv>
          </TextDiv>
        </ModalView>
        <Modalback onClick={() => closePostDetail()}></Modalback>
        {successSignUp ? <PopUp text={`삭제가 완료되었습니다.`} /> : null}
      </MarginDiv>
    </ModalArea>
  );
}

export default PostDetail;
