import styled from 'styled-components';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function UserContainer({ id }) {
    const [userImage, setUserImage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios(`/api/user/infoByImage/${id}`);
                setUserImage(response.data);
            } catch (error) {
                console.error('데이터를 가져오는 중에 오류가 발생하였습니다.', error);
            }
        };

        fetchData();
    }, []);

    console.log(userImage);

    return (
        <Container>
            <UserImage>
                <img
                    src={`http://localhost:8080/api/images/${
                        userImage ? userImage.imageUrl : ''
                    }`}
                    alt='사진'
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            </UserImage>
            <UserName>{userImage ? userImage.nickname : ''}</UserName>
            <UserLoacl></UserLoacl>
            <UserWeather> {userImage ? userImage.address : ''}</UserWeather>
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
  width: 10%;
  height: 85%;
  margin: 1%;
`;

const UserName = styled.div`
  width: 20%;
  height: 85%;
  margin: 1%;
`;

const UserLoacl = styled.div`
  width: 40%;
  height: 85%;
  margin: 1%;
`;

const UserWeather = styled.div`
  width: 20%;
  height: 85%;
  margin: 1%;
`;