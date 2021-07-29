import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Textbox from '../components/Textbox';
import styled from 'styled-components';
import Accordion from '../components/Accordion';
import AlertBox from '../components/AlertBox';

const url = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;

const PostAreaStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 180px;
  padding: 100px;
  height: 100%;
  background-color: #f3f4f4;
  width: 80vw;
  margin-left: 12%;
  margin-right: 10%;
  position: relative;
`;

// width: 60vw;
// height: 70vh;
// position: absolute;
// background-color: #f3f4f4;
// margin-left: 20%;
// margin-right: 20%;
// overflow: auto;

const H2Style = styled.h2`
  width: 100%;
  background-color: #018735;
  margin: -3px;
  z-index: 1;
  border-top-left-radius: 6px 6px;
  border-top-right-radius: 6px 6px;
  text-align: center;
  color: white;
`;

const ButtonStyle = styled.button`
  margin-top: 12px;
  background: hsl(134deg 100% 10%);
  border-radius: 12px;
  border: none;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  width: 30%;
`;

const ButtonFrontStyle = styled.button`
  display: block;
  padding: 12px 42px;
  border-radius: 12px;
  font-size: 1.5rem;
  font-weight: bold;
  background: hsl(134deg 100% 25.3%);
  color: white;
  width: 100%;

  transform: translateY(-6px);
  :active {
    transform: translateY(-2px);
  }
`;

const AlterBox = styled.div`
  position: relative;
`;

function Postpage() {
  const [checkedItems, setCheckedItems] = useState([]);
  const [allMenu, setAllMenu] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [errMessage, setErrMessage] = useState(false);
  const [checkErr, setCheckErr] = useState(false);

  const handleErr = () => {
    setCheckErr(true);
    setTimeout(() => {
      setCheckErr(false);
    }, 3000);
  };
  const history = useHistory();

  useEffect(async () => {
    //주소 수정해주세요
    const data = await axios.get(`${url}menu`).then((result) => {
      const arr = [];
      const name = Object.keys(result.data.data);
      const value = Object.values(result.data.data);

      for (let i = 0; i < name.length; i++) {
        arr.push({ [name[i]]: value[i] });
      }
      return arr;
    });
    setAllMenu(data);
  }, []);

  useEffect(() => {
    setErrMessage(false);
  }, [checkedItems]);

  const handleRadio = (item) => {
    const name = checkedItems.map((el) => el.name);
    if (!name.includes(item.name)) {
      let data = item;
      setCheckedItems([...checkedItems, data]);
    } else {
      for (let i = 0; i < checkedItems.length; i++) {
        if (checkedItems[i].name === item.name) {
          let newData = [
            ...checkedItems.slice(0, i),
            { ...checkedItems[i], id: item.id },
            ...checkedItems.slice(i + 1),
          ];
          setCheckedItems(newData);
        }
      }
    }
  };

  const handleCheckBox = (checked, item) => {
    if (checked) {
      const name = checkedItems.map((el) => el.name);
      if (!name.includes(item.name)) {
        setCheckedItems([...checkedItems, item]);
      } else {
        for (let i = 0; i < checkedItems.length; i++) {
          if (checkedItems[i].name === item.name) {
            checkedItems[i].id.push(item.id[0]);
          }
        }
      }
    } else {
      for (let i = 0; i < checkedItems.length; i++) {
        if (checkedItems[i].name === item.name) {
          let newData = checkedItems[i].id.filter((el) => el !== item.id[0]);
          checkedItems[i].id = newData;
        }
      }
    }
  };

  const handlePostSend = () => {
    const check = checkedItems.reduce((acc, cur) => {
      return [...acc, cur.name];
    }, []);
    if (!title) {
      setErrMessage('제목을 작성해주세요');
      handleErr();
      return;
    }
    if (!content) {
      setErrMessage('설명을 작성해주세요');
      handleErr();
      return;
    }
    if (!check.includes('main')) {
      setErrMessage('메인을 선택해주세요');
      handleErr();
      return;
    } else if (!check.includes('bread')) {
      setErrMessage('빵을 선택해주세요');
      handleErr();
      return;
    } else if (!check.includes('cheese')) {
      setErrMessage('치즈를 선택해주세요');
      handleErr();
      return;
    }

    const menu = checkedItems.reduce((acc, cur) => {
      if (Array.isArray(cur.id)) {
        return [...acc, ...cur.id];
      } else {
        return [...acc, cur.id];
      }
    }, []);
    const data = {
      title: title.content,
      content: content.content,
      menu,
    };
    console.log(data);
    //완료시 리렌더링되게 바꿔야함
    axios.post(`${url}posts`, data).then((result) => window.location.replace('/'));
  };

  return (
    allMenu && (
      <PostAreaStyle>
        <Textbox name="Title" textData={setTitle} />
        <H2Style>Choice Your Favorite</H2Style>
        {allMenu.map((el) => {
          const name = Object.keys(el)[0];
          return name === 'main' || name === 'bread' || name === 'cheese' ? (
            <Accordion check="radio" data={el} handleFunc={handleRadio} checkedItems={checkedItems} />
          ) : (
            <Accordion check="check" data={el} handleFunc={handleCheckBox} checkedItems={checkedItems} />
          );
        })}
        <Textbox name="Contents" textData={setContent} />
        <ButtonStyle className="back" onClick={handlePostSend}>
          <ButtonFrontStyle className="front">P O S T</ButtonFrontStyle>
        </ButtonStyle>
        {checkErr ? <AlertBox message={errMessage} /> : null}
      </PostAreaStyle>
    )
  );
}

export default Postpage;
