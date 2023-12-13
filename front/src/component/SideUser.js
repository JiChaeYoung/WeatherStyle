import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SideBar() {
  const navigate = useNavigate();
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

  const handleLogout = () => {
    navigate('/');
  };

  const handleProfile = () => {
    navigate('/userupload');
  };
  if (!profileData) {
    return <div>Loading...</div>; // 데이터가 아직 로드되지 않았을 때 로딩 메시지를 표시
  }
  return (
    <UserDiv>
      <UserInfo>
        <SideUser>
          <UserImage>
            <img
              src={`http://localhost:8080/api/images/${profileData.user.profileImage}`}
              alt='사진'
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </UserImage>
        </SideUser>
        <SideBtn>
          <UserBtn onClick={handleProfile}>프로필 수정</UserBtn>
          <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn>
        </SideBtn>
      </UserInfo>
    </UserDiv>
  );
}

export default SideBar;

const UserDiv = styled.div`
  border-bottom: 1px solid black;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserInfo = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SideBtn = styled.div``;

const SideUser = styled.div``;

const UserBtn = styled.button`
  margin-right: 30px;
  height: 50px;
  width: 100px;
`;

const LogoutBtn = styled.button`
  height: 50px;
  width: 120px;
`;

const UserImage = styled.div`
  border: 1px solid black;
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
`;
