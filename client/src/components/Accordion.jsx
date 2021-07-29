import React, { useRef, useCallback, useState } from 'react';
import styled from 'styled-components';
import CheckMenu from './CheckMenu';
import RadioMenu from './RadioMenu';

const ContainerStyle = styled.div`
  display: inline-flex;
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #fdbd05;
  margin-bottom: 2px;
  background-color: #fdbd05;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  height: 32px;
  margin: 0 32px 0 8px;
  font-weight: bold;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 0;
  width: 100%;
  padding: 0px;
  overflow: hidden;
  background-color: white;
  transition: height 0.35s ease, background 0.35s ease;
`;

const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 4px 8px;
  background-color: white;
  border: 3px solid #fdbd05;
  width: 100%;
`;

function Accordion({ check, data, handleFunc, checkedItems }) {
  //   const documentRef = useRef(document);
  const parentRef = useRef(HTMLDivElement);
  //   documentRef < HTMLDivElement > null;
  const childRef = useRef(HTMLDivElement);
  //   documentRef < HTMLDivElement > null;
  const [isCollapse, setIsCollapse] = useState(false);

  const handleButtonClick = useCallback(
    (e) => {
      // 이벤트 캡쳐링과 버블링에 있어 현재 이벤트 이후의 전파를 막습니다.
      // 모달할때 배운거
      e.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = '0';
        parentRef.current.style.background = 'white';
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
        parentRef.current.style.background = 'lightgray';
      }
      setIsCollapse(true);
    },
    [isCollapse],
  );

  return (
    <div style={{ width: '100%' }}>
      {check === 'radio' ? (
        <ContainerStyle>
          <Header onClick={handleButtonClick}>{`${Object.keys(data)[0]}(을)를 선택해주세요`}</Header>
          <ContentsWrapper ref={parentRef}>
            <Contents ref={childRef}>
              <RadioMenu data={data} handleRadio={handleFunc} />
            </Contents>
          </ContentsWrapper>
        </ContainerStyle>
      ) : (
        <ContainerStyle>
          <Header onClick={handleButtonClick}>{`${Object.keys(data)[0]}(을)를 선택해주세요`}</Header>
          <ContentsWrapper ref={parentRef}>
            <Contents ref={childRef}>
              <CheckMenu data={data} handleCheckBox={handleFunc} />
            </Contents>
          </ContentsWrapper>
        </ContainerStyle>
      )}
    </div>
  );
}

export default Accordion;
