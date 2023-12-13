import styled from 'styled-components';
import SideBar from '../component/SideBar';
import Header from '../component/Header';
import React, { useState } from 'react';
import axios from 'axios';

function EditUserPage({ loginUser }) {
    const [newUserData, setNewUserData] = useState({
        nickname: '',
        aboutMe: '',
        phoneNumber: '',
        address: '',
    });

    const [profileImage, setProfileImage] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUserData({
            ...newUserData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProfileImage(file);
    };

    const handleSaveChanges = async () => {
        console.log('loginUser:', loginUser);

        // 사용자가 입력하지 않은 필드를 필터링하고 null 값을 서버로 전송
        const filteredUserData = Object.fromEntries(
            Object.entries(newUserData).map(([key, value]) => [key, value !== '' ? value : null])
        );

        try {
            // 유저 정보 업데이트
            await axios.put('/api/user', filteredUserData);

            // 프로필 사진 업로드
            if (profileImage) {
                const formData = new FormData();
                formData.append('profileImage', profileImage);
                await axios.post('/api/user/profileEditUpload', formData);
            }

            // 업데이트가 성공하면 필요하다면 사용자 데이터 다시 불러오기
            // const response = await axios.get('/api/user/{userId}');
            // setUserData(response.data);
        } catch (error) {
            console.error('유저 정보 업데이트 중 에러 발생:', error);
        }
    };

    return (
        <MainContainer>
            <Container>
                <Header />
                <MainSection>
                    <SideBar />
                    <UserSection>
                        <UserDiv>
                            <form>
                                <label>
                                    Nickname:
                                    <input
                                        type="text"
                                        name="nickname"
                                        value={newUserData.nickname}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <label>
                                    About Me:
                                    <input
                                        type="text"
                                        name="aboutMe"
                                        value={newUserData.aboutMe}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <label>
                                    Phone Number:
                                    <input
                                        type="text"
                                        name="phoneNumber"
                                        value={newUserData.phoneNumber}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <label>
                                    Address:
                                    <input
                                        type="text"
                                        name="address"
                                        value={newUserData.address}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <label>
                                    Profile Image:
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                    />
                                </label>
                            </form>

                            <SaveButton onClick={handleSaveChanges}>Save Changes</SaveButton>
                        </UserDiv>
                    </UserSection>
                </MainSection>
            </Container>
        </MainContainer>
    );
}

export default EditUserPage;

const SaveButton = styled.button`
  margin-top: 10px;
`;

const MainContainer = styled.div``;

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const MainSection = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
`;

const UserSection = styled.div`
  border: 1px solid black;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserDiv = styled.div`
  width: 80%;
  height: 90%;
`;

const PostDiv = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingOrErrorMessage = styled.div`
  color: red;
  font-size: 20px;
  text-align: center;
`;
