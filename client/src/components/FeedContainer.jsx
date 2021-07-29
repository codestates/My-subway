import React, { useState, useEffect } from 'react';
import Feed from '../components/Feed';
import styled from 'styled-components';
import axios from 'axios';
axios.defaults.withCredentials = true;
const url = process.env.REACT_APP_API_URL;

const Container = styled.div`
  width: 60vw;
  height: 100%;
  position: absolute;
  background-color: #f3f4f4;
  margin-left: 20%;
  margin-right: 20%;
  overflow: auto;
`;
const OrderBy = styled.div`
  margin-left: 2rem;
  margin-top: 2rem;
  font-size: 1.5rem;
`;
const OrderByButton = styled.span`
  cursor: pointer;
`;

const NoSearchStyle = styled.div`
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > div {
    font-family: font-css;
    margin-top: 20px;
    font-size: 1.4rem;
  }
`;

function FeedContainer({ feeds, isLogIn, openModal, handleSetPosts, userInfo, text1 }) {
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const searchKeyword = document.querySelector('#SearchBox').value;
    setKeyword(searchKeyword);
  }, [feeds]);

  const orderByLikesHandler = async () => {
    let posts = await axios.get(`${url}posts`);
    posts = posts.data.data;
    let orderedFeeds = posts.slice(0).sort((a, b) => b.likes - a.likes);
    handleSetPosts(orderedFeeds);
  };
  const orderByCreatedAtHandler = async () => {
    let posts = await axios.get(`${url}posts`);
    posts = posts.data.data;
    let orderedFeeds = posts.slice(0).sort((a, b) => b.id - a.id);
    handleSetPosts(orderedFeeds);
  };
  return (
    <>
      <Container>
        <OrderBy>
          <OrderByButton onClick={orderByLikesHandler}>좋아요순</OrderByButton>
          <span> | </span>
          <OrderByButton onClick={orderByCreatedAtHandler}>최신순</OrderByButton>
        </OrderBy>
        {feeds.length === 0 ? (
          <NoSearchStyle>
            <img src="../imageFile/noresult.png" alt="" />
            <div>
              {text1 ? (
                text1
              ) : keyword === '' ? (
                <div>
                  <span>게시물이 없습니다......</span>
                </div>
              ) : (
                <div>
                  <span style={{ color: 'red' }}>"{keyword}"</span> <span>에 대한 결과가 없습니다.</span>
                </div>
              )}
            </div>
          </NoSearchStyle>
        ) : (
          feeds.map((el) => <Feed data={el} key={el.id} isLogIn={isLogIn} openModal={openModal} userInfo={userInfo} />)
        )}
      </Container>
    </>
  );
}

export default FeedContainer;
