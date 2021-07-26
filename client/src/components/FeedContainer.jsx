import React from 'react';
import Feed from '../components/Feed';
import styled from 'styled-components';

const Container = styled.div`
  width: 80vw;
  height: 70vh;
  position: absolute;
  background-color: white;
  margin-left: 10%;
  margin-right: 10%;
  overflow: auto;
`;
const OrderBy = styled.div`
  margin: 1rem;
`;
const OrderByButton = styled.span`
  cursor: pointer;
`;

function FeedContainer({ feeds, isLogIn, openModal, handleSetPosts }) {
  const orderByLikesHandler = () => {
    let orderedFeeds = feeds.slice(0).sort((a, b) => b.likes - a.likes);
    handleSetPosts(orderedFeeds);
  };
  const orderByCreatedAtHandler = () => {
    let orderedFeeds = feeds.slice(0).sort((a, b) => b.id - a.id);
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
        {feeds.map((el) => (
          <Feed data={el} key={el.id} isLogIn={isLogIn} openModal={openModal} />
        ))}
      </Container>
    </>
  );
}

export default FeedContainer;
