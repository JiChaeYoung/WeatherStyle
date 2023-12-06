import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  border: 1px solid black;
  height: 60px;
  margin: 5px;
`;

function Header() {
  return <Bar></Bar>;
}

export default Header;
