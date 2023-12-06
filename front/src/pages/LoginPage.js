import styled from 'styled-components';
import React from 'react';
import axios from 'axios';

function LoginPage() {
  const handleLogin = () => {
    const enteredId = document.getElementById('idInput').value;
    const enteredPassword = document.getElementById('passwordInput').value;

    // API 엔드포인트 URL
    const apiUrl = '/login';

    // POST 요청으로 보낼 데이터
    const requestData = {
      email: enteredId,
      password: enteredPassword,
    };

    // axios를 사용하여 서버에 POST 요청 보내기
    axios
      .post(apiUrl, requestData)
      .then((response) => {
        // 성공적으로 응답 받았을 때 실행되는 부분
        console.log(response);
        // 리다이렉션 또는 다른 작업 수행
        window.location.href = '/story';
      })
      .catch((error) => {
        // 에러 발생 시 실행되는 부분
        console.error(error);
        alert('ID와 비밀번호가 일치하지 않습니다.');
      });
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
