import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <HeaderDiv>
      <LogoDiv>SW</LogoDiv>
      <Link to='/'>
        <WeaderDiv>Home</WeaderDiv>
      </Link>
      <WeaderDiv></WeaderDiv>
      <WeaderDiv></WeaderDiv>
      <WeaderDiv></WeaderDiv>
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
