import styled from 'styled-components';
import SideBar from '../component/SideBar';
import Header from '../component/Header';
import React, { useState } from 'react';
import axios from 'axios';

function UploadPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [userList, setUserList] = useState([]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = async () => {
        try {
            const response = await axios.get('/api/user/search', {
                params: { nickName: searchTerm },
            });

            setUserList(response.data);
            console.log('사용자 목록:', response.data);
        } catch (error) {
            console.error('사용자 목록을 불러오는 중 에러 발생:', error);
        }
    };

    return (
        <MainContainer>
            <Container>
                <Header />
                <MainSection>
                    <SideBar />
                    <UserSection>
                        <TitleDiv>
                            <input
                                type='text'
                                value={searchTerm}
                                onChange={handleSearchChange}
                                placeholder='검색어를 입력하세요'
                            />
                            <button onClick={handleSearchSubmit}>검색</button>
                        </TitleDiv>
                        <UserList>
                            {userList.map((user) => (
                                <div key={user.id}>{user.nickName}</div>
                            ))}
                        </UserList>
                    </UserSection>
                </MainSection>
            </Container>
        </MainContainer>
    );
}

export default UploadPage;

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

const TitleDiv = styled.div`
  width: 50%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    font-size: 55px;
    color: gray;
  }
`;

const UserSection = styled.div`
  background: lightgray;
  border: 1px solid black;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserList = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    margin: 5px;
  }
`;
