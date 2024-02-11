import styled from 'styled-components';
import { BiLike } from 'react-icons/bi';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LikeBtn({ like }) {
    const [likeCnt, setLikeCnt] = useState(0);

    const handleLikeClick = async () => {
        try {
            // 좋아요 버튼을 누를 때 POST 요청
            await axios.post(`/api/likes/${like}`);

            // 좋아요 개수를 다시 불러오는 GET 요청
            const countResponse = await axios.get(`/api/likes/count/${like}`);
            setLikeCnt(countResponse.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        // 페이지 로드 시 초기 좋아요 개수를 불러오는 GET 요청
        const fetchLikeCount = async () => {
            try {
                const countResponse = await axios.get(`/api/likes/count/${like}`);
                setLikeCnt(countResponse.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchLikeCount();
    }, [like]);

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
