import styled from 'styled-components';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function SideBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const handleProfile = () => {
    navigate('/userupload');
  };

  return (
    <UserDiv>
      <UserInfo>
        <SideUser>
          <UserImage>UserImage</UserImage>
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
