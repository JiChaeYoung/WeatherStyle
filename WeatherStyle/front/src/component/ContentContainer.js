import styled from 'styled-components';
import LikeBtn from './LikeBtn';
import PostContent from './PostContent';
import { AiTwotoneAlert } from 'react-icons/ai';
import React from 'react';

function ContentContainer({ likes, tags }) {
    return (
        <Container>
            <LikeContainer>
                <LikeDiv>
                    <LikeBtn like={likes} />
                </LikeDiv>
                <PostTitle></PostTitle>
                <ReportBtn>
                    <AiTwotoneAlert />
                </ReportBtn>
            </LikeContainer>
            <PostContent tags={tags} />
        </Container>
    );
}

export default ContentContainer;

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