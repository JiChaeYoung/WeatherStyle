import styled from 'styled-components';
import SideBar from '../component/SideBar';
import Header from '../component/Header';
import Post from '../component/Post';
import Profil from '../component/Profil';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SearchUserPage() {
  const location = useLocation();
  let searchTerm = location.state ? location.state.searchTerm : '';
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        try {
          const response = await axios.get('/api/user/search', {
            params: { nickName: searchTerm },
          });

          setUsers(response.data);
          console.log('사용자 목록:', response.data);
        } catch (error) {
          console.error('사용자 목록을 불러오는 중 에러 발생:', error);
        }
      }
    };

    fetchData();
  }, [searchTerm]);

  console.log(users);

  return (
    <MainContainer>
      <Container>
        <Header />
        <MainSection>
          <SideBar />
          <UserSection>
            {users.map((user) => (
              <UserDiv key={user.id}>
                <Profil id={user.id} profileImage={user.profileImage} />
                <PostDiv>
                  <Post images={user.images} />
                </PostDiv>
              </UserDiv>
            ))}
          </UserSection>
        </MainSection>
      </Container>
    </MainContainer>
  );
}

export default SearchUserPage;

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
