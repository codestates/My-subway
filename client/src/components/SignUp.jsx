import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
axios.defaults.withCredentials = true;
const url = process.env.REACT_APP_API_URL;

const SignUpArea = styled.div`
  position: fixed;
  margin: 30px auto;
  left: 0;
  right: 0;
  z-index: 999;

  width: 300px;
  max-width: 400px;
  height: 300px;
  /* padding: 60px 0; */

  background: white;
  box-shadow: 0 0 15px #333;
  font-family: font-css;

  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

const Input = styled.input`
  font-size: 1.1em;
  font-weight: normal;

  display: block;

  width: 85%;
  margin-top: 2px;
  margin-left: 25px;
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

const SignUpBtn = styled.button`
  margin-top: 15px;
  width: 100%;
  height: auto;
  padding-top: 23px;
  padding-bottom: 23px;
  border-radius: 0px;

  cursor: pointer;

  border: none;
  /* border-top: 1px solid #eee; */
  outline: none;
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

const SignInBtn = styled.button`
  width: 100%;
  height: auto;
  padding-top: 23px;
  padding-bottom: 23px;
  cursor: pointer;
  border-radius: 0px;

  border: 0;
  /* border-top: 1px solid #eee; */
  outline: 0;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  background: #ff2d03;
`;

const ModalArea = styled.div`
  position: relative;
  height: 100%;
  text-align: center;
  z-index: 999;
`;

const Modalback = styled.div`
  z-index: 900;
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

// const SignUpText = styled.div`
//   margin-bottom: 30px;
//   font-size: 1.2em;
//   font-weight: bold;
// `;

function SignUp({ changeForm, closeModal, openModal }) {
  const [signUpInfo, setSignUpInfo] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [validateErr, setValidateErr] = useState('');
  //로그인 요청을 보낼 데이터
  const handleInputValue = (key) => (e) => {
    setSignUpInfo({ ...signUpInfo, [key]: e.target.value });
  };

  //회원가입 버튼을 눌렀을때
  const signUpHandle = () => {
    let { username, email, password } = signUpInfo;
    if (username && email && password && !validateErr) {
      axios
        .post(`${url}users/signup`, signUpInfo)
        .then((result) => {
          closeModal();
          openModal();
          alert('회원가입이 완료되었습니다');
          window.location.replace('/');
        })
        .catch((err) => {
          console.log(err);
          setValidateErr('이미 가입된 중복된 정보가 있습니다. 확인 후 다시 시도 해주세요.');
        });
    }
  };
  //유효성 검사 함수  //이거 따로 파일 빼는거도 괜찮을듯 (상현)
  const validateCheck = (inputName) => {
    const emailCheck =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordCheck = /^.*(?=^.{6,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    let { email, password, username } = signUpInfo;

    if (inputName === 'username') {
      return username.includes(' ') || username === '';
    }
    if (inputName === 'email') {
      return !emailCheck.test(email);
    }

    if (inputName === 'password') {
      return !passwordCheck.test(password);
    }
  };
  //유효성 검사 후 true면 데이터베이스 중복확인
  const checkedInfo = (inputName) => {
    let validate = validateCheck(inputName);
    let { email, username } = signUpInfo;
    if (validate) {
      if (inputName === 'username') {
        setValidateErr('닉네임에 공백이 있어선 안됩니다.');
      }

      if (inputName === 'email') {
        setValidateErr('올바른 이메일 주소를 입력하세요');
      }

      if (inputName === 'password') {
        setValidateErr('비밀번호는 숫자와 특수문자가 포함되어야 합니다.');
      }
    } else {
      setValidateErr('');
      if (inputName === 'username') {
        axios
          .get(`${url}users/?username=${username}`)
          .then((ok) => setValidateErr(''))
          .catch((err) => setValidateErr('중복된 닉네임 입니다.'));
      }

      if (inputName === 'email') {
        axios
          .get(`${url}users/?email=${email}`)
          .then((ok) => setValidateErr(''))
          .catch((err) => setValidateErr('중복된 이메일 입니다.'));
      }
    }
  };
  return (
    <ModalArea>
      <SignUpArea>
        <h1>SIGN UP</h1>
        <div>
          <Input
            type="text"
            onBlur={() => {
              checkedInfo('username');
            }}
            onChange={handleInputValue('username')}
            placeholder="닉네임을 입력해주세요"
          />
        </div>
        <div>
          <Input
            type="email"
            onBlur={() => {
              checkedInfo('email');
            }}
            onChange={handleInputValue('email')}
            placeholder="이메일을 입력해주세요"
          />
        </div>
        <div>
          <Input
            type="password"
            onBlur={() => {
              checkedInfo('password');
            }}
            onChange={handleInputValue('password')}
            placeholder="비밀번호를 입력해주세요"
          />
        </div>
        <div>{validateErr}</div>
        <div>
          <div>
            <SignUpBtn onClick={signUpHandle}>Sign Up</SignUpBtn>
          </div>
          <div>
            <SignInBtn
              className="btn btn-login"
              onClick={() => {
                changeForm();
              }}>
              Already a member?
            </SignInBtn>
          </div>
        </div>
      </SignUpArea>
      <Modalback onClick={() => closeModal()}></Modalback>
    </ModalArea>
  );
}

export default SignUp;
