import styled from 'styled-components';
import SideBar from '../component/SideBar';
import Header from '../component/Header';
import PostUser from '../component/PostUser';
import MyProfil from '../component/MyProfil';
import React from 'react';

function UserPage() {
  return (
    <MainContainer>
      <Container>
        <Header />
        <MainSection>
          <SideBar />
          <UserSection>
            <UserDiv>
              <MyProfil />
              <PostDiv>
                <PostUser />
              </PostDiv>
            </UserDiv>
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
