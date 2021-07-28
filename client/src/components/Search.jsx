import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
axios.defaults.withCredentials = true;

const FormArea = styled.form`
  display: flex;
  width: 100%;
`;

const ButtonStyle = styled.button`
  border: none;
  margin-left: 10px;
  width: 32px;
  height: 65px;
  cursor: pointer;
  background-color: transparent;
`;

const Select = styled.select`
  width: 0px;
  border: none;
  /* border-right: #128735; */
  padding: 10px;
  height: 66px;
  /* border-radius: 10px 0px 0px 10px; */
  color: #449b5e;
  font-size: 1.5em;
  font-family: font-css;
  background-color: white;

  /* display: none; */

  /* &.focused { */
  display: block;
  outline: none;
  width: 100px;
  border: 3px solid #128735;
  border-right: none;
  border-left: none;
  border-top: none;
  border-radius: 0px 0px 0px 0px;
  /* } */
`;
const Option = styled.option`
  color: black;
  width: 25%;
  /* border-right: #128735; */
  border: 0px;
  padding: 30px;
  height: 40px;
  /* border-radius: 10px 0px 0px 10px; */
  background-color: #ffffff;
  color: #449b5e;
  font-size: 1.1em;
  font-family: font-css;
`;

const SearchArea = styled.input`
  /* border: 3px solid #00b4cc;
  border-left: none;
  padding: 30px 30px 30px 10px;
  height: 40px;
  border-radius: 0px 10px 10px 0px;
  outline: none;
  background-color: #ffffff;
  color: #9dbfaf;
  ::placeholder {
    color: #449b5e;
  } */
  float: right;
  background-color: white;
  color: #449b5e;
  /* padding: 6px 10px; */

  width: 0px;
  border: none;
  border-bottom: black solid 2px;
  margin-top: 1px;
  margin-right: 8px;
  font-family: font-css;
  font-size: 1.5em;
  font-weight: bold;
  /* border-bottom: white solid 2px; */
  transition: 0.3s;
  /* &.focused { */
  width: 400px;
  padding-left: 30px;
  font-family: font-css;
  font-size: 1.5em;
  font-weight: bold;
  transition: 0.3s;
  /* Stops the input box from inheriting the styling from the inputs on the request form */
  border: none;
  border-bottom: 3px solid #128735;
  outline: none;
  /* } */
`;
// /* :focus {
//   width: 400px;
//   font-family: 'Segoe UI Light', 'Segoe UI', 'Segoe', Tahoma, Helvetica, Arial, sans-serif;
//   font-size: 1em;
//   font-weight: bold;
//   transition: 0.3s;
//   /* Stops the input box from inheriting the styling from the inputs on the request form */
//   border: none;
//   border-bottom: black solid 2px;
//   outline: none;
// } */
function Search({ getPosts, setGetPosts }) {
  const [keyword, setKeyword] = useState('');
  const [option, setOption] = useState('제목');

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };
  const getOption = (e) => {
    setOption(e.target.value);
  };
  const onSearch = async (e) => {
    // if (e.keyCode === 13) {
    let allPosts = await axios.get(`${process.env.REACT_APP_API_URL}posts`).then((data) => data.data.data);
    let result;
    if (option === '제목') {
      result = allPosts.filter((posts) => posts.title.includes(keyword)).sort((a, b) => b.likes - a.likes);
    }
    if (option === '메뉴') {
      result = allPosts.filter((posts) => posts.mainmenu.includes(keyword)).sort((a, b) => b.likes - a.likes);
    }
    if (option === '닉네임') {
      result = allPosts.filter((posts) => posts.username.includes(keyword)).sort((a, b) => b.likes - a.likes);
    }
    setGetPosts(result);
    // }
  };

  const onSearchEnter = (e) => {
    if (e.keyCode === 13) {
      onSearch(e);
    }
  };

  return (
    <FormArea onSubmit={(e) => e.preventDefault()}>
      <Select onChange={getOption}>
        <Option value="제목">제목</Option>
        <Option value="메뉴">메뉴</Option>
        <Option value="닉네임">닉네임</Option>
      </Select>
      <SearchArea
        id="SearchBox"
        type="text"
        placeholder="Search.."
        name="search"
        value={keyword}
        onChange={handleKeyword}
        onKeyUp={onSearchEnter}
      />
      <ButtonStyle type="submit" onClick={onSearch}>
        <SearchIcon style={{ color: 'green', fontSize: '50px' }} onClick={onSearch} />
      </ButtonStyle>
    </FormArea>
  );
}

export default Search;
