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
  margin-right: 20%;
  padding: 10%;
`;

const Div = styled.div`
  display: flex;
  margin: 10px;
  border: 1px solid black;
  width: 250px;
`;

function App() {
  return (
    <Container>
      <Div>Div 1</Div>
      <Qontainer>
        <Qiv>Div 2</Qiv>
        <Qiv2>Div 3</Qiv2>
      </Qontainer>
    </Container>
  );
}

export default App;
