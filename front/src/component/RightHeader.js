import styled from 'styled-components';
import React from 'react';

function RightHeader() {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <MainContainer>
      <HeaderContainer>
        <WeatherDiv>
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
          <ul>
            습도
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <ul>
            강수량
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </WeatherDiv>
      </HeaderContainer>
    </MainContainer>
  );
}

export default RightHeader;

const MainContainer = styled.div``;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
`;

const WeatherDiv = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  height: 80%;
  width: 80%;
  & li {
    margin: 10px;
    font-size: 20px;
  }
`;
