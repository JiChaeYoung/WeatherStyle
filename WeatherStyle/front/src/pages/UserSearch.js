import styled from 'styled-components';
import SideBar from '../component/SideBar';
import Header from '../component/Header';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UploadPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(`Searching for ${searchTerm}`);
    navigate('/usersearch', { state: { searchTerm: searchTerm } });
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
