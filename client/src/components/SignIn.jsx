import React, { useState } from 'react';
import AlertBox from './AlertBox';
import styled from 'styled-components';
import axios from 'axios';

const url = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;

const ModalArea = styled.div`
  position: relative;
  height: 100%;
  text-align: center;
  z-index: 999;
  font-family: font-css;
`;
const Modalback = styled.div`
  z-index: -1;
  position: fixed;
  margin: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);

  place-items: center;
`;

const ModalView = styled.div`
  z-index: 999;
  width: 300px;
  height: 42vh;
  margin: 0px;
  background: white;
  box-shadow: 0 0 15px #333;
  position: fixed;
  margin: 180px auto;
  left: 0;
  right: 0;
`;

const Input = styled.input`
  font-size: 1.1em;
  font-weight: normal;

  display: block;

  width: 85%;
  margin-top: 2px;
  margin-bottom: 2px;
  margin-left: 23px;

  height: 45px;

  -webkit-transition: box-shadow 0.3s;
  transition: box-shadow 0.3s;
  transition: 0.25s linear;
  text-align: center;

  color: #8609e3;
  border: 0;
  outline: 0;
  background: #eee;
  box-shadow: 0 0 0 2px transparent;

  &:focus {
    animation: boxShadow 0.3s backwards;

    box-shadow: 0 0 0 2px #8609e3;
  }
`;

const SignInBtn = styled.button`
  margin-top: 2px;
  width: 100%;
  height: auto;
  padding-top: 23px;
  padding-bottom: 23px;
  cursor: pointer;
  border: 0;
  border-top: 1px solid #eee;
  border-radius: 0px;
  outline: 0;
  font-size: 1.2em;
  font-weight: bold;
  color: white;
  background: #8609e3;

  :focus {
    outline: none;
  }
  :hover {
    color: black;
  }
`;

const SocialSignInBtn = styled.button`
  width: 100%;
  height: 100%;
  padding-top: 23px;
  padding-bottom: 50px;
  cursor: pointer;
  border: 0;
  border-top: 1px solid #eee;
  outline: 0;
  font-size: 1.2em;
  font-weight: bold;
  background-color: #fee518;
  color: white;
  background-image: url('../imageFile/kakaoButton.png');
  background-size: cover;
  /* object-fit: contain; */
`;

const SignUpBtn = styled.button`
  width: 100%;
  height: auto;
  padding-top: 23px;
  padding-bottom: 23px;
  cursor: pointer;

  border: 0;
  border-top: 1px solid #eee;
  outline: 0;

  font-size: 0.9em;
  color: #333;
  background: white;
`;

// const AlertBox = styled.div`
//   position: absolute;
//   left: 50%;
//   transform: translateX(-50%);

//   background-color: mediumvioletred;
//   padding: 1em 2.4em;
//   border-radius: 4px;
//   box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
//   color: white;
//   font-size: 1.2em;
//   font-weight: bold;
//   white-space: nowrap;

//   /* 경고 창은 화면 위쪽에 숨겨둔다. */
//   top: 250px;
//   transition-duration: 300ms;
//   z-index: 999;
// `;

const MarginDiv = styled.div`
  display: flex;
`;

function SignIn({ isLogIn, openLogInIcon, openModal, setUserInfo, closeModal, changeForm }) {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [checkErr, setCheckErr] = useState(false);

  const handleErr = () => {
    setCheckErr(true);
    setTimeout(() => {
      setCheckErr(false);
    }, 3000);
  };

  //로그인 요청을 보낼 데이터
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  //로그인 요청하는 곳
  const handleLogin = () => {
    if (!loginInfo.email || !loginInfo.password) {
      setErrorMessage('이메일과 비밀번호를 입력하세요');
      handleErr();
      return;
    }

    axios
      .post(`${url}users/signin`, { email: loginInfo.email, password: loginInfo.password })
      .then((result) => {
        if (result.data.message === 'ok') {
          openModal();
          openLogInIcon();
          axios.get(`${url}users`).then((data) => setUserInfo(data.data.data));
          window.location.replace('/');
        }
      })
      .catch((err) => {
        setErrorMessage('이메일 혹은 비밀번호가 틀립니다.');
        handleErr();
      });
  };

  //소셜 로그인 요청하는 곳
  const socialLoginHandler = () => {
    let clientId = process.env.REACT_APP_CLIENT_ID;
    let redirectUri = process.env.REACT_APP_REDIRECT_URI;
    window.location.assign(
      `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`,
    );

    openModal();
    closeModal();
  };
  const loginPressEnter = (e) => {
    if (e.keyCode === 13) {
      handleLogin();
    }
  };

  return (
    <ModalArea>
      {isLogIn ? null : (
        <MarginDiv>
          <ModalView>
            <h1>SIGN IN</h1>

            <div>
              <span>이메일</span>
              <Input
                type="email"
                onKeyUp={loginPressEnter}
                onChange={handleInputValue('email')}
                placeholder="이메일을 입력해주세요"
              />
            </div>
            <div>
              <span>비밀번호</span>
              <Input
                type="password"
                onKeyUp={loginPressEnter}
                onChange={handleInputValue('password')}
                placeholder="비밀번호를 입력해주세요"
              />
            </div>
            <div>
              <SignUpBtn onClick={() => changeForm()}>아직 아이디가 없으신가요?</SignUpBtn>
            </div>
            <div>
              <SignInBtn onClick={handleLogin}>Sign In</SignInBtn>
            </div>
            {checkErr ? <AlertBox message={errorMessage} /> : null}
            <div>
              <SocialSignInBtn onClick={socialLoginHandler}>
                {/* <img src="../imageFile/kakaoButton.png" alt="login" /> */}
              </SocialSignInBtn>
            </div>
          </ModalView>
          <Modalback onClick={() => closeModal()}></Modalback>
        </MarginDiv>
      )}
    </ModalArea>
  );
}

export default SignIn;
