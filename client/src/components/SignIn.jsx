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
  font-family: 'font-css';
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
  width: 40vmin;
  height: 50vmin;
  min-height: 400px;
  background: white;
  box-shadow: 0 0 15px #333;
  position: fixed;
  margin: 15vh auto;
  padding-top: 1vh;
  left: 0;
  right: 0;
  overflow: hidden;
`;

const Input = styled.input`
  font-size: 1.1rem;
  font-weight: normal;
  display: block;

  width: 80%;
  margin-bottom: 0.5rem;
  margin-left: 10%;
  margin-right: 10%;
  height: 45px;

  -webkit-transition: box-shadow 0.3s;
  transition: box-shadow 0.3s;
  transition: 0.25s linear;
  text-align: center;

  color: black;
  border: 0;
  outline: 0;
  background: #eee;
  box-shadow: 0 0 0 2px transparent;

  &:focus {
    animation: boxShadow 0.3s backwards;

    box-shadow: 0 0 0 2px #008e43;
  }
`;

const InputPassword = styled.input`
  font-size: 1.1rem;
  display: block;
  font-family: Arial;
  ::placeholder {
    font-family: 'font-css';
  }

  width: 80%;
  margin-bottom: 0.5rem;
  margin-left: 10%;
  margin-right: 10%;

  height: 45px;

  -webkit-transition: box-shadow 0.3s;
  transition: box-shadow 0.3s;
  transition: 0.25s linear;
  text-align: center;

  color: black;
  border: 0;
  outline: 0;
  background: #eee;
  box-shadow: 0 0 0 2px transparent;

  &:focus {
    animation: boxShadow 0.3s backwards;

    box-shadow: 0 0 0 2px #008e43;
  }
`;

const SignInBtn = styled.div`
  width: 100%;
  height: 18%;
  padding-top: 4%;
  cursor: pointer;
  font-size: 2rem;
  color: black;
  background: #008e43;
  :hover {
    border: 2px solid #008e43;
  }

  :focus {
    outline: none;
  }
`;

const SocialSignInBtn = styled.div`
  width: 100%;
  height: 18%;

  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  /* object-fit: contain; */
  :hover {
    border: 2px solid #fee518;
  }
`;

const SignUpBtn = styled.div`
  width: 100%;
  height: 18%;
  padding-top: 23px;
  padding-bottom: 23px;
  cursor: pointer;
  font-size: 1.2rem;
  color: #333;
  background: white;
`;

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
  const clickErrBox = () => {
    setCheckErr(false);
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
            <div style={{ height: '46%' }}>
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
                <InputPassword
                  type="password"
                  onKeyUp={loginPressEnter}
                  onChange={handleInputValue('password')}
                  placeholder="비밀번호를 입력해주세요"
                />
              </div>
            </div>

            <SignUpBtn onClick={() => changeForm()}>아직 아이디가 없으신가요?</SignUpBtn>
            <SignInBtn onClick={handleLogin}>Sign In</SignInBtn>

            {checkErr ? <AlertBox message={errorMessage} setCheckErr={clickErrBox} /> : null}

            <SocialSignInBtn onClick={socialLoginHandler}>
              <img
                src="../imageFile/kakaoButton.png"
                alt="login"
                style={{ position: 'relative', width: '100%', top: '-9%', zIndex: '-1', backgroundColor: '#fee518' }}
              />
            </SocialSignInBtn>
          </ModalView>
          <Modalback onClick={() => closeModal()}></Modalback>
        </MarginDiv>
      )}
    </ModalArea>
  );
}

export default SignIn;
