import styled from 'styled-components';
import React from 'react';

function LeftHeader() {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <MainContainer>
      <HeaderContainer>
        <LogoDiv>LogoDiv</LogoDiv>
        <WeatherDiv>
          <ul>
            주소
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <ul>
            온도
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <ul>
            온도
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </WeatherDiv>
      </HeaderContainer>
    </MainContainer>
  );
}

export default LeftHeader;

const MainContainer = styled.div`
  margin-bottom: 193px;
`;

const HeaderContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  width: 50%;

  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0px;
  left: 0px;
`;

const LogoDiv = styled.div`
  border: 1px solid black;
  display: flex;
  height: 50%;
  width: 30%;
`;

const WeatherDiv = styled.div`
  border: 1px solid black;
  display: flex;
  height: 80%;
  width: 50%;
  & li {
    margin: 10px;
    font-size: 1em;
  }
`;
