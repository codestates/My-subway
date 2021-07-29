import React, { useState } from 'react';
import styled from 'styled-components';
import PostDetail from './PostDetail';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltTwoTone';
import axios from 'axios';
axios.defaults.withCredentials = true;
const url = process.env.REACT_APP_API_URL;

const Menu = styled.div`
  background: #f4f4f4;
  border-radius: 2px;
  display: inline-block;
  height: 16vw;
  margin: 2vw;
  position: relative;
  border-radius: 2%;
  width: 16vw;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 1px 6px rgba(0, 0, 0, 0.23);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
const LikesDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin-left: 7%;
  margin-right: 7%;
  height: 20%;
`;

const TitleDiv = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 1.2vw;
  padding-left: 5%;
  padding-right: 5%;
  height: 15%;
`;
const LikeButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

const MenuImg = styled.img`
  width: 100%;
`;
const HeaderDiv = styled.div`
  height: 80%;
  cursor: pointer;
`;

function Feed({ data, isLogIn, openModal, userInfo }) {
  const [liked, setLiked] = useState(data.liked);
  const [likes, setLikes] = useState(data.likes);
  const [isOpenPostDetail, setIsOpenPostDetail] = useState(false);
  const [postDetail, setPostDetail] = useState({});
  const openPostDetail = () => {
    setIsOpenPostDetail(true);
  };
  const closePostDetail = () => {
    setIsOpenPostDetail(false);
  };

  const handleClickLike = async () => {
    console.log('like button clicked! likes:', likes, ' liked:', liked, ' isLogIn:', isLogIn);
    if (!!liked) {
      console.log('like button clicked! likes:', likes, ' liked:', liked);
      setLiked(0);
      setLikes(likes - 1);
      //delete likes api
      await axios.delete(`${url}likes/${data.id}`);
    } else {
      if (isLogIn) {
        setLiked(1);
        setLikes(likes + 1);
        console.log('like button clicked! likes:', likes, ' liked:', liked);
        //post likes api
        await axios.post(`${url}likes`, { post_id: data.id });
      } else {
        openModal();
      }
    }
  };

  const handleClickFeed = async (post_id) => {
    let postDetailData = await axios.get(`${url}posts/${post_id}`);
    setPostDetail(postDetailData.data.data);
    openPostDetail();
  };

  return (
    <>
      <Menu>
        <HeaderDiv
          onClick={() => {
            handleClickFeed(data.id);
          }}>
          <MenuImg src={data.img_url} alt=""></MenuImg>
          <TitleDiv>{data.title}</TitleDiv>
        </HeaderDiv>
        <LikesDiv>
          <LikeButton onClick={handleClickLike}>
            {!!liked ? (
              <ThumbUpAltTwoToneIcon style={{ color: 'red', fontSize: '1.5vw' }} />
            ) : (
              <ThumbUpAltOutlinedIcon style={{ fontSize: '1.5vw' }} />
            )}
            <span style={{ marginLeft: '0.3vw', fontSize: '1.1vw' }}>{likes}</span>
          </LikeButton>
          <span style={{ fontSize: '1.1vw' }}>{data.username}</span>
        </LikesDiv>
      </Menu>

      {isOpenPostDetail ? (
        <PostDetail
          postDetail={postDetail}
          closePostDetail={closePostDetail}
          liked={liked}
          likes={likes}
          handleClickLike={handleClickLike}
          userInfo={userInfo}
          isLogIn={isLogIn}
        />
      ) : null}
    </>
  );
}

export default Feed;
