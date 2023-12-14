import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PostBox from '../component/PostBox';
import PostBoxEdit from '../component/PostBoxEdit'; // Make sure to import PostBoxEdit
import SideBar from '../component/SideBar';
import Header from '../component/Header';
import { RiBallPenFill } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function UserPostPage() {
  const location = useLocation();
  let imageID = location.state ? location.state.imageID : '';
  const [isEditMode, setEditMode] = useState(false);
  const [image, setImage] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`/api/image/${imageID}`);
        setImage(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, [imageID]);

  if (!image) {
    return <div>Loading...</div>;
  }
  console.log(image[0]);

  const toggleEditMode = () => {
    setEditMode(!isEditMode);
  };

  return (
    <MainContainer>
      <Container>
        <Header />
        <MainSection>
          <SideBar />
          <PostSection>
            <PostDiv>
              {/* <PostBox
                image={image[0].imageUrl}
                likes={image[0].id}
                tags={image[0].tags}
              /> */}
            </PostDiv>
            <SettingDiv>
              <button onClick={toggleEditMode}>
                <RiBallPenFill />
                <p>수 정</p>
              </button>
            </SettingDiv>
          </PostSection>
        </MainSection>
      </Container>
    </MainContainer>
  );
}

export default UserPostPage;

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

const PostSection = styled.div`
  border: 1px solid gray;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostDiv = styled.div`
  background-color: white;
  width: 60%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SettingDiv = styled.div`
  width: 100px;
  height: 100px;
  margin-top: 30%;
  margin-left: 5%;

  button {
    border-radius: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 100%;
    font-size: 30px;
    & svg {
      font-size: 80px;
    }
  }
`;
