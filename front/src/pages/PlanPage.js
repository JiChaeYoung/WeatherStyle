import styled from 'styled-components';
import React from 'react';

function PlanPage() {
  return (
    <Container1>
      <Div1>
        <Logodiv>logo</Logodiv>
        <SideBardiv>side bar</SideBardiv>
      </Div1>
      <Container2>
        <Headerdiv>Header</Headerdiv>
        <Div2>
          <Postdiv>post page</Postdiv>
          <Settingdiv>setting page</Settingdiv>
        </Div2>
      </Container2>
    </Container1>
  );
}

export default PlanPage;

const Container1 = styled.div`
  display: flex;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const Headerdiv = styled.div`
  display: flex;
  margin: 10px;
  border: 1px solid black;
  height: 100px;
`;

const Div2 = styled.div`
  display: flex;
  margin: 10px;
  border: 1px solid black;
  height: 100%;
  margin-left: 20%;
  position: relative;
`;

const Postdiv = styled.div`
  display: flex;
  border: 1px solid black;
  margin: 5% 5% 0;
  width: 60%;
  height: 90%;
  position: absolute;
`;

const Settingdiv = styled.div`
  display: flex;
  border: 1px solid black;
  width: 20%;
  height: 20%;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Div1 = styled.div`
  display: flex;
  margin: 10px;
  border: 1px solid black;
  width: 250px;
  position: relative;
  flex-direction: column;
`;

const Logodiv = styled.div`
  display: flex;
  border: 1px solid black;
  width: 250px;
  height: 85px;
`;

const SideBardiv = styled.div`
  display: flex;
  border: 1px solid black;
  width: 250px;
  height: 80%;
  position: absolute;
  bottom: 0;
`;
