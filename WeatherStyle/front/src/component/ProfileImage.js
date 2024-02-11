import styled from 'styled-components';
import React from 'react';

function ProfileImage({ profileImage }) {
  return (
    <ProfilImage>
      <ProfilImage2>
        <img
          src={`http://localhost:8080/api/images/${profileImage}`}
          alt='사진'
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </ProfilImage2>
    </ProfilImage>
  );
}

export default ProfileImage;

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
