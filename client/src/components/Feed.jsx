import React, { useState } from 'react';
import styled from 'styled-components';
import PostDetail from './PostDetail';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltTwoTone';
import axios from 'axios';
axios.defaults.withCredentials = true;
const url = process.env.REACT_APP_API_URL;

const Menu = styled.div`
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  height: 300px;
  margin: 1rem;
  position: relative;
  width: 300px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
const LikesDiv = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-weight: bold;
`;
const UsernameDiv = styled.div``;

const ContentArea = styled.div`
  position: relative;
  font-weight: bold;
  text-align: center;
  margin-left: 5%;
  margin-right: 5%;
`;

const TitleDiv = styled.div`
  font-size: 150%;
  cursor: pointer;
`;
const LikeButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

const MenuImg = styled.img`
  width: 100%;
  height: 70%;
`;

function Feed({ data, isLogIn, openModal }) {
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
        <MenuImg src={data.img_url} alt=""></MenuImg>
        <ContentArea>
          <TitleDiv
            onClick={() => {
              handleClickFeed(data.id);
            }}>
            {data.title}
          </TitleDiv>
          <LikesDiv>
            <LikeButton onClick={handleClickLike}>
              {!!liked ? <ThumbUpAltTwoToneIcon style={{ color: 'red' }} /> : <ThumbUpAltOutlinedIcon />}
              <div>{likes}</div>
            </LikeButton>
            <UsernameDiv>{data.username}</UsernameDiv>
          </LikesDiv>
        </ContentArea>
      </Menu>

      {isOpenPostDetail ? (
        <PostDetail
          postDetail={postDetail}
          closePostDetail={closePostDetail}
          liked={liked}
          likes={likes}
          handleClickLike={handleClickLike}
        />
      ) : null}
    </>
  );
}

export default Feed;
