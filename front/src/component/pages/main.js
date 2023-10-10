import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Qontainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const Qiv = styled.div`
  display: flex;
  margin: 10px;
  border: 1px solid black;
  height: 100px;
`;

const Qiv2 = styled.div`
  display: flex;
  margin: 10px;
  border: 1px solid black;
  height: 100%;
  margin-left: 20%;
  position: relative;
`;

const Qiv3 = styled.div`
  display: flex;
  border: 1px solid black;
  margin: 10% 10% 0;
  width: 60%;
  height: 80%;
  position: absolute;
`;

const Qiv4 = styled.div`
  display: flex;
  border: 1px solid black;
  width: 20%;
  height: 20%;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Div = styled.div`
  display: flex;
  margin: 10px;
  border: 1px solid black;
  width: 250px;
`;

function Mainpage() {
  return (
    <Container>
      <Div>Div 1</Div>
      <Qontainer>
        <Qiv>Div 2</Qiv>
        <Qiv2>
          Div 3<Qiv3>Div 4</Qiv3>
          <Qiv4></Qiv4>
        </Qiv2>
      </Qontainer>
    </Container>
  );
}

export default Mainpage;
