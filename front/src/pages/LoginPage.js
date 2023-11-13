import styled from 'styled-components';

function LoginPage() {
  return (
    <MainContainer>
      <MainSection>
        <TitleDiv> WS</TitleDiv>
        <LoginDiv>
          <IdSection>IdSection</IdSection>
          <IdSection>IdSection</IdSection>
          <LoginBtnDiv>
            <LoginBtn>LoginBtn</LoginBtn>
            <LoginBtn>LoginBtn</LoginBtn>
          </LoginBtnDiv>
        </LoginDiv>
      </MainSection>
    </MainContainer>
  );
}

export default LoginPage;

const MainContainer = styled.div``;

const MainSection = styled.div`
  background-color: #d8ffb9;
  border: 1px solid black;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleDiv = styled.div`
  width: 400px;
  height: 100px;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginDiv = styled.div`
  background-color: white;
  box-shadow: 2px 2px 2px 2px gray;
  border: 1px solid black;
  border-radius: 5px;
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: space-around;
  margin: 5%;
`;

const IdSection = styled.div`
  border: 1px solid black;
  width: 200px;
  height: 40px;
`;

const LoginBtnDiv = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3%;
`;

const LoginBtn = styled.button`
  width: 170px;
  height: 90%;
  margin: 2px;
  box-shadow: 1px 1px 1px 1px gray;
`;
