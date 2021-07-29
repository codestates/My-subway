import React, { useState, useEffect, useRef } from 'react';
// import './Navigator.css';
import styled from 'styled-components';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Search from '../components/Search';
import axios from 'axios';
import PopUp from '../components/PopUp';
axios.defaults.withCredentials = true;

// 스타일컴퍼넌트
const HeaderArea = styled.div`
  position: relative;
  width: 100%;
  /* height: 150px; */
  background-color: #fdbd01;
`;

const HeaderWrap = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  top: 0;
  left: 0;
  z-index: 950;
  width: 100%;
  height: 150px;
  transition: 1.5s ease;
  background-color: #ffffff;
  &.hide {
    transform: translateY(-150px);
  }
`;

const InnerDiv = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImageLog = styled.img`
  min-height: 50px;
  height: 50px;
  margin-left: 22%;
  cursor: pointer;
`;

const DivStyle = styled.div`
  display: flex;
  align-items: center;
  margin-right: 22%;
`;

const ButtonStyle = styled.button`
  border: none;
  /* width: 300px;
  height: 300px; */
  margin-left: 15px;
  cursor: pointer;
  background-color: transparent;
`;

// 네이게이션바 구현 목록
function Navigator({ changeSideBar, isLogIn, setGetPosts, getPosts, openModal, closeLogInIcon, setText }) {
  const [hide, setHide] = useState(false);
  const [pageY, setPageY] = useState(0);
  const [successSignUp, setSuccessSignUp] = useState(false);
  const documentRef = useRef(document);

  // functions

  // 스크롤
  const throttle = function (callback, waitTime) {
    let timerId = null;
    return (e) => {
      if (timerId) return;
      timerId = setTimeout(() => {
        callback.call(this, e);
        timerId = null;
      }, waitTime);
    };
  };

  const handleScroll = () => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const hide = pageYOffset !== 0 && deltaY >= 0;
    setHide(hide);
    setPageY(pageYOffset);
  };

  const throttleScroll = throttle(handleScroll, 50);

  // userEffect
  useEffect(() => {
    documentRef.current.addEventListener('scroll', throttleScroll);
    return () => documentRef.current.removeEventListener('scroll', throttleScroll);
  }, [pageY, throttleScroll]);

  const getAccessToken = async (authorizationCode) => {
    let resp = await axios.post(`${process.env.REACT_APP_API_URL}users/auth`, { authorizationCode });
    closeLogInIcon();

    if (resp.status === 201) {
      setSuccessSignUp(true);
    } else {
      window.location.replace('/');
    }
  };

  useEffect(() => {
    // 소셜로 부터 리디렉션 됬을때 접근코드를 서버에게보냄.
    let url = new URL(window.location.href);
    let authorizationCode = url.searchParams.get('code');
    if (authorizationCode) {
      getAccessToken(authorizationCode);
    }
  }, []);
  return (
    <HeaderArea>
      <HeaderWrap className={hide && 'hide'}>
        <InnerDiv>
          <ImageLog
            src="../imageFile/mySubwayLog.png"
            alt=""
            onClick={() => {
              window.location.replace('/');
            }}
          />
          <DivStyle>
            <Search getPosts={getPosts} setGetPosts={setGetPosts} setText={setText} />
            {isLogIn ? (
              //마이페이지 버튼
              <ButtonStyle type="button" onClick={changeSideBar}>
                <AccountCircleOutlinedIcon style={{ color: 'green', fontSize: '50px' }} />
              </ButtonStyle>
            ) : (
              //로그인 버튼
              <ButtonStyle type="button" onClick={openModal}>
                <LockOpenOutlinedIcon style={{ color: 'green', fontSize: '50px' }} />
              </ButtonStyle>
            )}
          </DivStyle>
        </InnerDiv>
        {successSignUp ? <PopUp text={`회원가입에 성공하셨습니다. 마이페이지 창에서 닉네임을 변경해주세요'`} /> : null}
      </HeaderWrap>
    </HeaderArea>
  );
}

export default Navigator;
