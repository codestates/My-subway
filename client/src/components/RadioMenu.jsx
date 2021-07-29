import React from 'react';
import styled from 'styled-components';

const InputStyle = styled.input`
  display: none;
  &:checked {
    border: 20px solid rgb(0, 0, 0);
  }
`;

const CheckedStyle = styled.div`
  position: relative;
  [type='radio']:checked + label > img {
    background-color: #019935;
    border-radius: 10% 40% 10% 10%;
  }
`;

const ImgStyle = styled.img`
  width: 20vw;
  height: 20vw;
  margin: 0px;
  padding: 0px;
  &:hover {
    opacity: 0.6;
    transition: transform 0.2s ease-out, color 0.2s ease;
    transform: scale(1.2);
    cursor: pointer;
  }
  &:active {
    opacity: 0.4;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

const Caption = styled.div`
  font-family: font-css;
  text-align: center;
  color: black;
  z-index: 1;
`;

const SelectSectionStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: space-around;
  width: 100vw;
  height: 100%;
`;

function RadioMenu({ data, handleRadio }) {
  const name = Object.keys(data)[0];
  const menu = data[name];
  return (
    <SelectSectionStyle>
      {menu.map((el) => (
        <CheckedStyle>
          <InputStyle
            type="radio"
            id={el.id}
            name={name}
            value={el.id}
            onChange={(e) => {
              const data = { name, id: el.id };
              handleRadio(data);
            }}
          />
          <label for={el.id}>
            <ImgStyle src={el.img_url} />
          </label>
          <Caption>{el.name}</Caption>
        </CheckedStyle>
      ))}
    </SelectSectionStyle>
  );
}

export default RadioMenu;
