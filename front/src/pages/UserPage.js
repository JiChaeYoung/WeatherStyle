import styled from 'styled-components';
import SideBar from '../component/SideBar';
import Header from '../component/Header';
import Post from '../component/Post';
import Profil from '../component/Profil';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserPage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // 페이지 로드 시 유저 데이터를 가져오는 비동기 함수
    const fetchUserData = async () => {
      try {
        // 유저 아이디에 해당하는 데이터를 가져옴 (예시: /api/user/{userId})
        const response = await axios.get('/api/user/{userId}'); // userId에 실제 사용자 아이디를 넣어주어야 함

        // 가져온 데이터를 상태에 설정
        setUserData(response.data);
      } catch (error) {
        console.error('유저 데이터를 불러오는 중 에러 발생:', error);
      }
    };

    fetchUserData(); // 비동기 함수 호출
  }, []); // 빈 배열을 넣어 한 번만 실행되도록 함

  return (
      <MainContainer>
        <Container>
          <Header />
          <MainSection>
            <SideBar />
            <UserSection>
              {userData ? ( // userData가 있을 경우에만 렌더링
                  <UserDiv>
                    <Profil userData={userData} />
                    <PostDiv>
                      {/* 유저 데이터 중에서 필요한 부분만 Post 컴포넌트에 전달 */}
                      <Post postData={userData.postData} />
                    </PostDiv>
                  </UserDiv>
              ) : (
                  // userData가 없을 경우 로딩 또는 에러 메시지 표시
                  <LoadingOrErrorMessage>Loading...</LoadingOrErrorMessage>
              )}
            </UserSection>
          </MainSection>
        </Container>
      </MainContainer>
  );
}

export default UserPage;

const MainContainer = styled.div``;

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const MainSection = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
`;

const UserSection = styled.div`
  border: 1px solid black;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserDiv = styled.div`
  width: 80%;
  height: 90%;
`;

const PostDiv = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingOrErrorMessage = styled.div`
  color: red;
  font-size: 20px;
  text-align: center;
`;
