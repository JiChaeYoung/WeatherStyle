import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function PostUser() {
  const [profileData, setProfileData] = useState(null);
  const navigate = useNavigate(); // navigate 함수 가져오기

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
    return <div>Loading...</div>;
  }

  const handleImageClick = (id) => {
    navigate('/userpost', {
      state: { imageID: `${id}` },
    });
  };

  return (
    <Post1>
      {profileData.images.map((image, index) => {
        let imagePath = image.imageUrl.replace('C:\\images\\', '');
        imagePath = imagePath.replace(/\\/g, '/');
        return (
          <Posts key={index}>
            <img
              src={`http://localhost:8080/api/images/${imagePath}`}
              alt='post'
              style={{ maxWidth: '100%', height: 'auto' }}
              onClick={() => handleImageClick(image.id)} // 이미지 클릭 시 handleImageClick 함수 호출
            />
          </Posts>
        );
      })}
    </Post1>
  );
}

export default PostUser;

const Post1 = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: Row;
`;

const Posts = styled.div`
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  border: 1px solid white;
  width: 180px;
  height: 180px;
  margin: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
