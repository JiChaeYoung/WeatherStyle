import styled from 'styled-components';
import LeftHeader from '../component/LeftHeader';
import RightHeader from '../component/RightHeader';
import PostBox from '../component/PostBox';
import MenuBar from '../component/MenuBar';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MainPage() {
  const [leftImages, setLeftImages] = useState([]);
  const [rightImages, setRightImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const responseLeft = await axios.get('/api/image/feed');
        const responseRight = await axios.get("/api/image/feed/tag");

        setLeftImages(responseLeft.data);
        setRightImages(responseRight.data);
        console.log(responseLeft.data)
        console.log(responseRight.data)

      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, []);

  const calculateMainContainerHeight = () => {
    // 이미지의 개수에 따라 적절한 높이를 계산 (이 예시에서는 100px 단위로 계산)
    const imageHeight = 100; // 이미지의 예상 높이
    const minHeight = 100; // 최소 높이
    const calculatedHeight = Math.max(minHeight, leftImages.length * imageHeight, rightImages.length * imageHeight);

    return calculatedHeight;
  };
  return (
      <MainContainer style={{ height: `${calculateMainContainerHeight()}vh` }}>
        <LeftMainSection>
          <LeftHeader />
          {leftImages.map((image, index) => (
              <PostContainer key={index}>
                <PostBox
                    image={image.imageUrl}
                    likes={image.id}
                    tags={image.tags}
                />
              </PostContainer>
          ))}
        </LeftMainSection>
        <RightMainSection>
          <RightHeader />
          {rightImages.map((image, index) => (
              <PostContainer key={index}>
                <PostBox
                    image={image.imageUrl}
                    likes={image.id}
                    tags={image.tags}
                />
              </PostContainer>
          ))}
          <MenuBar />
        </RightMainSection>
      </MainContainer>
  );
}

export default MainPage;

const MainContainer = styled.div`
  background-color: white;
  display: flex;
  height: 100vh;
`;

const LeftMainSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 85%;
  width: 50%;
`;

const RightMainSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 85%;
  width: 50%;
`;

const PostContainer = styled.div`
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const WeatherComment = styled.div`
  border: 1px solid black;
  width: 80%;
  height: 70%;
`;
