import styled from 'styled-components';
import { BiLike } from 'react-icons/bi';
import React from 'react';

function LikeBtn() {
  return (
    <>
      <LikeBtn2>
        <BiLike />
      </LikeBtn2>
      <LikeCnt>LikeCnt</LikeCnt>
    </>
  );
}

export default LikeBtn;

const LikeBtn2 = styled.button`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 49%;
  margin: 1%;
`;

const LikeCnt = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 49%;
  margin: 1%;
`;
