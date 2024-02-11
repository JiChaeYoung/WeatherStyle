import styled from 'styled-components';
import React from 'react';

function LoginId() {
  return (
    <>
      <IdSection>
        <input></input>
      </IdSection>
      <IdSection>
        <input></input>
      </IdSection>
    </>
  );
}

export default LoginId;

const IdSection = styled.div`
  border: 1px solid black;
  width: 200px;
  height: 40px;
  input {
    width: 193px;
    height: 35px;
  }
`;
