import styled, { keyframes } from 'styled-components';
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    const enteredId = document.getElementById('idInput').value;
    const enteredPassword = document.getElementById('passwordInput').value;

    // POST 요청으로 보낼 데이터
    const requestData = {
      email: enteredId,
      password: enteredPassword,
    };

    // axios를 사용하여 서버에 POST 요청 보내기
    axios
      .post('/api/login', requestData)
      .then((response) => {
        // 성공적으로 응답 받았을 때 실행되는 부분
        // console.log(response);
        // 리다이렉션 또는 다른 작업 수행
        navigate('/story');
      })
      .catch((error) => {
        // 에러 발생 시 실행되는 부분
        console.error(error);
        alert('ID와 비밀번호가 일치하지 않습니다.');
      });
  };
  const handleSingup = () => {
    navigate('/signup');
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
            <SignupBtn onClick={handleSingup}>회원가입</SignupBtn>
          </LoginBtnDiv>
        </LoginDiv>
      </MainSection>
    </MainContainer>
  );
}

export default LoginPage;

const MainContainer = styled.div``;

const moveGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const MainSection = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to left, #808080, #fff);
  background-size: 200% 200%;
  animation: ${moveGradient} 5s linear infinite;
`;

const TitleDiv = styled.div`
  width: 400px;
  height: 100px;
  font-size: 50px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
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
  margin: 3%;
`;

const IdSection = styled.div`
  border: 1px solid black;
  width: 200px;
  height: 40px;
  margin-bottom: 3px;
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
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  background-color: #000;
  color: #fff;
  border: 5px dotted gary;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  &:hover {
    background-color: #333;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: 0;
    transform: translateY(2px);
  }
`;

const SignupBtn = styled(LoginBtn)`
  background-color: #fff;
  color: #000;

  &:hover {
    background-color: #eee;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: 0;
    transform: translateY(2px);
  }
`;
