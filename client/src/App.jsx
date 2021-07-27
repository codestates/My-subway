import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from 'styled-components';
import React, { useState, useEffect } from 'react';
import { Switch, Route, Link, useHistory } from 'react-router-dom';

import Navigator from './pages/Navigator';
import Mainpage from './pages/Mainpage';
import Sidebar from './components/Sidebar';
import axios from 'axios';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Postpage from './pages/Postpage';
import PostButton from './components/PostButton';
axios.defaults.withCredentials = true;

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
}
  html {
    height: 100%;
  }
	body {
		padding: 0;
		margin: 0;
    height: 100%;
    background-color: #ffffff;
;
    display:flex;
	}
`;

function App() {
  const [sideBarOn, setSideBarOn] = useState(false);
  const [userInfo, setUserInfo] = useState('');
  const [isLogIn, setIsLogIn] = useState(false);
  const [getPosts, setGetPosts] = useState([]);
  const [isModal, setModal] = useState(false);
  const [isOpenSignUp, SetIsOpenSignUp] = useState(false);

  const openLogInIcon = () => {
    setIsLogIn(true);
  };

  const closeLogInIcon = () => {
    setIsLogIn(false);
  };
  //Sidebar
  const changeSideBar = () => {
    setSideBarOn(!sideBarOn);
  };

  //모달창 닫기
  const closeModal = () => {
    setModal(false);
    SetIsOpenSignUp(false);
  };

  //모달창 열기
  const openModal = () => {
    setModal(true);
  };

  //회원가입 모달폼 오픈
  const changeForm = () => {
    SetIsOpenSignUp(!isOpenSignUp);
    openModal();
  };

  const handleSetPosts = (posts) => {
    setGetPosts(posts);
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}posts`).then((data) => {
      let orderedFeeds = data.data.data.slice(0).sort((a, b) => b.likes - a.likes);
      setGetPosts(orderedFeeds);
    });
    axios.get(`${process.env.REACT_APP_API_URL}users`).then((data) => {
      if (data.data.data) {
        setUserInfo(data.data.data);
        openLogInIcon();
      }
    });
  }, [isLogIn]);

  return (
    <div>
      <GlobalStyle />
      <Navigator
        changeSideBar={changeSideBar}
        setUserInfo={setUserInfo}
        openLogInIcon={openLogInIcon}
        isLogIn={isLogIn}
        getPosts={getPosts}
        setGetPosts={setGetPosts}
        openModal={openModal}
        closeLogInIcon={closeLogInIcon}
      />

      {isModal ? (
        isOpenSignUp ? (
          <SignUp changeForm={changeForm} closeModal={closeModal} openModal={openModal} />
        ) : (
          <SignIn
            isLogIn={isLogIn}
            openLogInIcon={openLogInIcon}
            openModal={openModal}
            setUserInfo={setUserInfo}
            closeModal={closeModal}
            changeForm={changeForm}
          />
        )
      ) : null}
      <Switch>
        <Route exact={true} path="/">
          <Mainpage
            getPosts={getPosts}
            isLogIn={isLogIn}
            openModal={openModal}
            handleSetPosts={handleSetPosts}
            userInfo={userInfo}
          />
        </Route>
        <Route path="/post">
          <Postpage />
        </Route>
      </Switch>

      {sideBarOn ? (
        <Sidebar
          changeSideBar={changeSideBar}
          userInfo={userInfo}
          getPosts={getPosts}
          setGetPosts={setGetPosts}
          closeLogInIcon={closeLogInIcon}
        />
      ) : null}
      <PostButton />
    </div>
  );
}

export default App;
