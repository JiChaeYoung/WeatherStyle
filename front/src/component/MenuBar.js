import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const Link = styled(RouterLink)`
  color: inherit;
  text-decoration: none;
`;
const slideUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const MenuDiv = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: center;
  width: 150px;
  height: 350px;
  position: fixed;
  top: 75%;
  right: 3%;
  transform: translate(0, -50%);
`;

const Menu = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin-top: 10px;
  background-color: white;
`;

const Menu2 = styled.div`
  background-color: white;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin-top: 10px;
  animation: ${slideUp} 0.5s ease;
`;

const Menu3 = styled.div`
  border: 1px solid black;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin-top: 10px;
  animation: ${slideUp} 0.5s ease;
`;

const Menu4 = styled.div`
  border: 1px solid black;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin-top: 10px;
  animation: ${slideUp} 0.5s ease;
`;

function MenuBar() {
  const [menu2Visible, setMenu2Visible] = useState(false);
  const [menu3Visible, setMenu3Visible] = useState(false);
  const [menu4Visible, setMenu4Visible] = useState(false);

  const handleMenuClick = () => {
    setMenu2Visible(!menu2Visible);
    setMenu3Visible(!menu3Visible);
    setMenu4Visible(!menu4Visible);
  };

  return (
    <MenuDiv>
      <Menu onClick={handleMenuClick}>더보기</Menu>
      <Menu2 style={{ visibility: menu2Visible ? 'visible' : 'hidden' }}>
        <Link to='/user'>내정보</Link>
      </Menu2>
      <Menu3 style={{ visibility: menu3Visible ? 'visible' : 'hidden' }}>
        <Link to='/upload'>게시물</Link>
      </Menu3>
      <Menu4 style={{ visibility: menu4Visible ? 'visible' : 'hidden' }}>
        <Link to='/search'>검색</Link>
      </Menu4>
    </MenuDiv>
  );
}

export default MenuBar;
