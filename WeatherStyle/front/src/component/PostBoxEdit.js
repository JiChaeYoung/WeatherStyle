import styled from 'styled-components';
import LikeBtn from './LikeBtn';
import PostContent from './PostContent';
import React from 'react';

function PostBoxEdit() {
  return (
    <PostSection>
      <Container1>
        <UserImage>UserImage</UserImage>
        <UserName>UserName</UserName>
        <UserLoacl>UserLoacl</UserLoacl>
        <UserWeather>UserWeather</UserWeather>
      </Container1>
      <ImageContainer>ImageContainer</ImageContainer>
      <Container>
        <LikeContainer>
          <LikeDiv>
            <LikeBtn />
          </LikeDiv>
          <PostTitle>PostTitle</PostTitle>
          <ReportBtn>ReportBtn</ReportBtn>
        </LikeContainer>
        <PostContent />
      </Container>
    </PostSection>
  );
}

export default PostBoxEdit;

const Container = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25%;
  width: 100%;
`;

const LikeContainer = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  height: 40%;
  width: 100%;
`;

const LikeDiv = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  height: 80%;
  width: 24%;
  margin: 1%;
`;

const PostTitle = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 59%;
  margin: 1%;
`;

const ReportBtn = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 14%;
  margin: 1%;
`;

const Container1 = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12%;
  width: 100%;
`;

const UserImage = styled.div`
  border: 1px solid black;
  width: 10%;
  height: 85%;
  margin: 1%;
`;

const UserName = styled.div`
  border: 1px solid black;
  width: 20%;
  height: 85%;
  margin: 1%;
`;

const UserLoacl = styled.div`
  border: 1px solid black;
  width: 40%;
  height: 85%;
  margin: 1%;
`;

const UserWeather = styled.div`
  border: 1px solid black;
  width: 20%;
  height: 85%;
  margin: 1%;
`;

const PostSection = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 65%;
`;

const ImageContainer = styled.div`
  border: 1px solid black;
  height: 90%;
  width: 70%;
`;
