import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PostBox from '../component/PostBox';
import PostBoxEdit from '../component/PostBoxEdit'; // Make sure to import PostBoxEdit
import SideBar from '../component/SideBar';
import Header from '../component/Header';
import { RiBallPenFill } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Comment from '../component/Comment';

function UserPostPage() {
  const { imageId } = useParams(); // useParams를 사용하여 URL 파라미터(imageId)를 가져옴
  const [isEditMode, setEditMode] = useState(false);
  const [image, setImage] = useState();

  console.log(imageId);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`/api/image/${imageId}`);
        setImage(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImage();
  }, [imageId]);

  if (!image) {
    return <div>Loading...</div>;
  }
  console.log(image);
  console.log(image);
  console.log(image);
  console.log(image);

  const toggleEditMode = () => {
    setEditMode(!isEditMode);
  };
  const handleImageClick = (imageData) => {
    setEditMode(true);
    // 이미지 클릭 시 해당 이미지에 대한 데이터를 사용하여 PostBox 컴포넌트에 세팅
    setImage([imageData]);
  };

  return (
    <MainContainer>
      <Container>
        <Header />
        <MainSection>
          <SideBar />
          <PostSection>
            <PostDiv>
              <PostBox
                image={image.imageUrl} // 이미지 URL을 전달
                likes={image.id} // 이미지 ID를 전달
                tags={image.tags} // 이미지 태그를 전달
              />
            </PostDiv>
            {isEditMode && <Comment />}
            <SettingDiv>
              <button onClick={toggleEditMode}>
                <RiBallPenFill />
                <p>댓 글</p>
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
`;

const PostDiv = styled.div`
  background-color: white;
  border: 1px solid black;
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

const CommentDiv = styled.div`
  border: 1px solid black;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
`;

const CommentSection = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 80%;
`;

const CreateComment = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 20%;
`;
