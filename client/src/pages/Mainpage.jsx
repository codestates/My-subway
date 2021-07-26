import React from 'react';
import styled from 'styled-components';
import Carousel from '../components/Carousel';
import FeedContainer from '../components/FeedContainer';

const BodyArea = styled.div`
  margin-top: 150px;
  padding: 0;
  height: 100vh;
`;

const images = [
  { imgUrl: '../imageFile/pngwing.com1.png' },
  { imgUrl: '../imageFile/pngwing.com2.png' },
  { imgUrl: '../imageFile/pngwing.com3.png' },
  { imgUrl: '../imageFile/pngwing.com4.png' },
  { imgUrl: '../imageFile/pngwing.com5.png' },
];

function Mainpage({ getPosts, isLogIn, openModal, handleSetPosts }) {
  return (
    <BodyArea>
      <div>TOP5</div>
      <Carousel images={images} />
      <FeedContainer feeds={getPosts} isLogIn={isLogIn} openModal={openModal} handleSetPosts={handleSetPosts} />
    </BodyArea>
  );
}

export default Mainpage;
