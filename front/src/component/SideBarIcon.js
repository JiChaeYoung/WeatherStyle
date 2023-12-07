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
      <ListItem>
        <Link to='/story'>
          <FaHome />홈
        </Link>
      </ListItem>
      <ListItem>
        <Link to='/user'>
          <RiAccountBoxFill />
          내정보
        </Link>
      </ListItem>
      <ListItem>
        <Link to='/upload'>
          <RiArchiveDrawerFill />서 랍
        </Link>
      </ListItem>
      <ListItem>
        <Link to='/user'>
          <RiBarChartFill />통 계
        </Link>
      </ListItem>
      <ListItem>
        <Link to='/upload'>
          <RiDiscussFill />채 팅
        </Link>
      </ListItem>
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

  & svg {
    font-size: 24px;
    margin-right: 20px;
  }

  &:hover {
    background-color: #fff0f0;
    width: 75%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }
`;
