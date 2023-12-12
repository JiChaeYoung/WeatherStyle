import styled from 'styled-components';
import { BiLike } from 'react-icons/bi';
import React, { useState } from 'react';
import axios from 'axios';

function LikeBtn({ like }) {
  const [likeCnt, setLikeCnt] = useState(0);

  const handleLikeClick = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/likes/${like}`
      );
      if (response.status === 200) {
        setLikeCnt(likeCnt + 1);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <LikeBtn2 onClick={handleLikeClick}>
        <BiLike />
      </LikeBtn2>
      <LikeCnt>{likeCnt}</LikeCnt>
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
