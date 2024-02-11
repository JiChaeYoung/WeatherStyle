import styled from 'styled-components';
import { FaHome } from 'react-icons/fa';
import {
  RiAccountBoxFill,
  RiArchiveDrawerFill,
  RiDiscussFill,
  RiBarChartFill,
} from 'react-icons/ri';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

const Link = styled(RouterLink)`
  color: inherit;
  text-decoration: none;
`;

function icons() {
  return (
    <>
      <Link to='/story'>
        <ListItem>
          <FaHome />홈
        </ListItem>
      </Link>
      <Link to='/user'>
        <ListItem>
          <RiAccountBoxFill />
          내정보
        </ListItem>
      </Link>
      <Link to='/search'>
        <ListItem>
          <RiArchiveDrawerFill />검 색
        </ListItem>
      </Link>
      <Link to='/user'>
        <ListItem>
          <RiBarChartFill />통 계
        </ListItem>
      </Link>
      <Link to='/upload'>
        <ListItem>
          <RiDiscussFill />채 팅
        </ListItem>
      </Link>
    </>
  );
}

export default icons;

const ListItem = styled.li`
  width: 70%;
  list-style-type: none;
  border-radius: 15%;
  padding: 6%;
  margin-top: 10px;
  font-size: 18px;
  color: black;

  & svg {
    font-size: 24px;
    margin-right: 20px;
    color: black;
  }

  &:hover {
    background-color: #ffb6c1;
    width: 75%;
    font-size: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    color: white;
    font-weight: bold;

    & svg {
      color: white;
    }
  }
`;
