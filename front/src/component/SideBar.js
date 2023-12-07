import styled from 'styled-components';
import SideUser from './SideUser';
import SideBarIcon from './SideBarIcon';
import React from 'react';

function SideBar() {
  return (
    <SideBarDiv>
      <ItemDiv>
        <ul>
          <SideBarIcon />
        </ul>
      </ItemDiv>
      <SideUser />
    </SideBarDiv>
  );
}

export default SideBar;

const SideBarDiv = styled.div`
  width: 20%;
  height: 100%;
`;

const ItemDiv = styled.div`
  border-bottom: 1px solid black;
  width: 100%;
  height: 50%;
`;
