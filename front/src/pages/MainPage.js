import styled from 'styled-components';
import LeftHeader from '../component/LeftHeader';
import RightHeader from '../component/RightHeader';
import PostBox from '../component/PostBox';
import MenuBar from '../component/MenuBar';
import React from 'react';

function MainPage() {
  return (
    <MainContainer>
      <LeftMainSection>
        <LeftHeader />
        <PostContainer>
          <PostBox />
        </PostContainer>
        <PostContainer>
          <PostBox />
        </PostContainer>
        <PostContainer>
          <PostBox />
        </PostContainer>
      </LeftMainSection>
      <RightMainSection>
        <RightHeader />
        <PostContainer>
          <WeatherComment>WeatherComment</WeatherComment>
          <MenuBar />
        </PostContainer>
      </RightMainSection>
    </MainContainer>
  );
}

export default MainPage;

const MainContainer = styled.div`
  background-color: white;
  display: flex;
  height: 300vh;
`;

const LeftMainSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 85%;
  width: 50%;
`;

const RightMainSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50%;
  position: fixed;
  top: 0px;
  right: -3px;
`;

const PostContainer = styled.div`
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const WeatherComment = styled.div`
  border: 1px solid black;
  width: 80%;
  height: 70%;
`;
