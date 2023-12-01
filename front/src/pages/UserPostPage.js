import React, { useState } from 'react';
import styled from 'styled-components';
import PostBox from '../component/PostBox';
import PostBoxEdit from '../component/PostBoxEdit'; // Make sure to import PostBoxEdit
import SideBar from '../component/SideBar';
import Header from '../component/Header';
import { RiBallPenFill } from 'react-icons/ri';

function UserPostPage() {
  const [isEditMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!isEditMode);
  };

  return (
    <MainContainer>
      <Container>
        <Header />
        <MainSection>
          <SideBar />
          <PostSection>
            <PostDiv>{isEditMode ? <PostBoxEdit /> : <PostBox />}</PostDiv>
            <SettingDiv>
              <button onClick={toggleEditMode}>
                <RiBallPenFill />
                <p>수 정</p>
              </button>
            </SettingDiv>
          </PostSection>
        </MainSection>
      </Container>
    </MainContainer>
  );
}

export default UserPostPage;

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

const PostSection = styled.div`
  border: 1px solid gray;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostDiv = styled.div`
  background-color: white;
  width: 60%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SettingDiv = styled.div`
  width: 100px;
  height: 100px;
  margin-top: 30%;
  margin-left: 5%;

  button {
    border-radius: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 100%;
    font-size: 30px;
    & svg {
      font-size: 80px;
    }
  }
`;
