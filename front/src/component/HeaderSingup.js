import styled from 'styled-components';
import React from 'react';

function Header() {
  return (
    <HeaderDiv>
      <LogoDiv>LogoDiv</LogoDiv>
      <WeaderDiv>Home</WeaderDiv>
      <WeaderDiv>asdf</WeaderDiv>
      <WeaderDiv>asdf</WeaderDiv>
      <WeaderDiv>asdfasdf</WeaderDiv>
    </HeaderDiv>
  );
}

export default Header;

const HeaderDiv = styled.div`
  display: flex;
  height: 100px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`;

const WeaderDiv = styled.div`
  border: 1px solid gray;
  width: 15%;
  height: 85%;
  margin: 8px;
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoDiv = styled.div`
  width: 20%;
  height: 100%;
  margin-right: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
