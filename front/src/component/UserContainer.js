import styled from 'styled-components';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function UserContainer() {
  const [userImage, setUserImage] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userLoacl, setUserLoacl] = useState(null);
  const [userWeather, setUserWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios('API_URL');
        const data = await response.json();

        setUserImage(data.userImage);
        setUserName(data.userName);
        setUserLoacl(data.userLoacl);
        setUserWeather(data.userWeather);
      } catch (error) {
        console.error('데이터를 가져오는 중에 오류가 발생하였습니다.', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <UserImage>{userImage}</UserImage>
      <UserName>{userName}</UserName>
      <UserLoacl>{userLoacl}</UserLoacl>
      <UserWeather>{userWeather}</UserWeather>
    </Container>
  );
}

export default UserContainer;

const Container = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12%;
  width: 100%;
`;

const UserImage = styled.div`
  border: 1px solid black;
  width: 10%;
  height: 85%;
  margin: 1%;
`;

const UserName = styled.div`
  border: 1px solid black;
  width: 20%;
  height: 85%;
  margin: 1%;
`;

const UserLoacl = styled.div`
  border: 1px solid black;
  width: 40%;
  height: 85%;
  margin: 1%;
`;

const UserWeather = styled.div`
  border: 1px solid black;
  width: 20%;
  height: 85%;
  margin: 1%;
`;
