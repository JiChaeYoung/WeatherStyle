import styled from 'styled-components';
import { GiShadowFollower } from 'react-icons/gi';
import { SlUserFollowing } from 'react-icons/sl';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyProfile() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`/api/user/myinfo`);
        setProfileData(response.data);
      } catch (error) {
        console.error('프로필 데이터를 불러오는 중 에러 발생:', error);
      }
    };
    fetchProfile();
  }, []);

  if (!profileData) {
    return <div>Loading...</div>; // 데이터가 아직 로드되지 않았을 때 로딩 메시지를 표시
  }

  return (
    <ProfilDiv>
      <ProfilImage>
        <ProfilImage2>ProfilImage2</ProfilImage2>
      </ProfilImage>
      <ProfilInfoDiv>
        <ProfilInfo>
          <SlUserFollowing />
          <p>following</p>
          <p>:</p>
          <p>{profileData.followingCount}</p>
        </ProfilInfo>
        <FollowerDiv>
          <GiShadowFollower />
          <p>follower</p>
          <p>:</p>
          <p>{profileData.followerCount}</p>
        </FollowerDiv>
      </ProfilInfoDiv>
    </ProfilDiv>
  );
}

export default MyProfile;

const ProfilDiv = styled.div`
  border: 1px solid lightgray;
  width: 100%;
  height: 30%;
  display: flex;
  background-color: #dcdcdc;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const ProfilImage = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfilImage2 = styled.div`
  background-color: white;
  border: 1px solid black;
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfilInfoDiv = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ProfilInfo = styled.div`
  width: 40%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    font-size: 30px;
  }
  p {
    font-size: 20px;

    margin: 2%;
  }

  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10%;
`;

const FollowerDiv = styled.div`
  width: 40%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  border-radius: 10%;

  & svg {
    font-size: 30px;
  }
  p {
    font-size: 20px;

    margin: 2%;
  }
`;
