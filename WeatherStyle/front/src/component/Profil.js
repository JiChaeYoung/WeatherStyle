import styled from 'styled-components';
import { GiShadowFollower } from 'react-icons/gi';
import { SlUserFollowing } from 'react-icons/sl';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileImage from './ProfileImage';
import FollowButton from './FollowButton'; // Import FollowButton

function Profile({ id, profileImage }) {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`/api/user/${id}`);
        setProfileData(response.data);
      } catch (error) {
        console.error('프로필 데이터를 불러오는 중 에러 발생:', error);
      }
    };
    fetchProfile();
  }, [id]);

  const updateFollowCounts = (isFollowing) => {
    // Update follower and following counts based on the follow status
    setProfileData((prevData) => {
      return {
        ...prevData,
        followerCount: isFollowing
          ? prevData.followerCount - 1
          : prevData.followerCount + 1,
      };
    });
  };

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <ProfilDiv>
      <ProfilImage>
        <ProfileImage profileImage={profileImage} />
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
        <AboutMeDiv>
          <p>About Me:</p>
          <AboutMeText>{profileData.aboutMe}</AboutMeText>
        </AboutMeDiv>
        <FollowButton pageUserId={id} updateCounts={updateFollowCounts} />
      </ProfilInfoDiv>
    </ProfilDiv>
  );
}

export default Profile;

const ProfilDiv = styled.div`
  border: 1px solid lightgray;
  width: 100%;
  height: 30%;
  display: flex;
  background-color: #dcdcdc;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const ProfilImage = styled.div`
  width: 50%;
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
const AboutMeDiv = styled.div`
  width: 80%; /* 변경된 부분 */
  height: 50%;
  display: flex;
  flex-direction: column; /* 변경된 부분 */
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10%;
`;

const AboutMeText = styled.p`
  font-size: 16px;
  margin: 2%;
`;
