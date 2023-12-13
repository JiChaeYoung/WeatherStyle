
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FollowButton = ({ pageUserId, onFollowToggle, updateCounts }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const checkFollowingStatus = async () => {
      try {
        const response = await axios.get(`/api/checkFollowing/${pageUserId}`);
        setIsFollowing(response.data);
      } catch (error) {
        console.error('팔로잉 상태 확인 중 에러 발생:', error);
      }
    };

    checkFollowingStatus();
  }, [pageUserId]);

  const handleFollowToggle = async () => {
    try {
      if (isFollowing) {
        await axios.delete(`/api/follow/${pageUserId}`);
      } else {
        await axios.post(`/api/follow/${pageUserId}`);
      }

      if (onFollowToggle) {
        onFollowToggle();
      }

      setIsFollowing((prev) => !prev);

      // Update follower and following counts immediately
      if (updateCounts) {
        updateCounts(isFollowing);
      }
    } catch (error) {
      console.error('팔로우 토글 중 에러 발생:', error);
    }
  };

  return (
    <FollowButtonWrapper onClick={handleFollowToggle} isFollowing={isFollowing}>
      {isFollowing ? '언팔로우' : '팔로우'}
    </FollowButtonWrapper>
  );
};

const FollowButtonWrapper = styled.button`
  padding: 8px 16px;
  background-color: ${(props) => (props.isFollowing ? 'lightgray' : 'blue')};
  color: ${(props) => (props.isFollowing ? 'black' : 'white')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default FollowButton;
