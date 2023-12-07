import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import axios from "axios";
import {useState} from "react";

const Link = styled(RouterLink)`
  color: inherit;
  text-decoration: none;
`;
function LoginPage() {
  const [enteredId, setEnteredId] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', {
        email: enteredId,
        password: enteredPassword,
      });

      if (response.status === 200) {
        window.location.href = '/story';
      } else {
        alert('ID와 비밀번호가 일치하지 않습니다.');
      }
    } catch (error) {
      console.error('로그인 오류:', error);
    }
  };
  return (
    <MainContainer>
      <MainSection>
        <TitleDiv> WS</TitleDiv>
        <LoginDiv>
          <IdSection>
            <input
              id='idInput'
              name='idInput'
              type='text'
              placeholder='아이디'
            ></input>
          </IdSection>
          <IdSection>
            <input
              id='passwordInput'
              name='passwordInput'
              type='password'
              placeholder='비밀번호'
            ></input>
          </IdSection>
          <LoginBtnDiv>
            <LoginBtn onClick={handleLogin}>로그인</LoginBtn>
            {/* <LoginBtn>
              <Link to='/story'>로그인</Link>
            </LoginBtn> */}
            <LoginBtn>회원가입</LoginBtn>
          </LoginBtnDiv>
        </LoginDiv>
      </MainSection>
    </MainContainer>
  );
}

export default LoginPage;

const MainContainer = styled.div``;

const MainSection = styled.div`
  background-color: white;
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
  input {
    width: 193px;
    height: 35px;
  }
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
