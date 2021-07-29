import React from 'react';
import styled from 'styled-components';

const DivStyle = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 30px;
`;

const TextStyle = styled.h2`
  width: 100%;
  background-color: #018735;
  margin: -2px 0;

  z-index: 1;
  border-top-left-radius: 6px 6px;
  border-top-right-radius: 6px 6px;
  text-align: center;
  color: white;
`;

const InputStyle = styled.input`
  width: 100%;
  margin-bottom: 2%;
  border: 3px solid #018735;
  text-align: center;
  padding: 10px 0px 10px 0px;

  ::placeholder {
    text-align: center;
  }
`;

function Textbox({ name, textData }) {
  const handleText = (e) => {
    textData({ content: e.target.value });
  };

  return (
    <DivStyle>
      <TextStyle>{name}</TextStyle>
      <InputStyle type="textbox" onChange={handleText} placeholder="작성 부탁드릴게요." />
    </DivStyle>
  );
}

export default Textbox;
