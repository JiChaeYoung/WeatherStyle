import styled from 'styled-components';
import LeftHeader from '../component/LeftHeader';
import RightHeader from '../component/RightHeader';
import PostBox from '../component/PostBox';
import MenuBar from '../component/MenuBar';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MainPage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('/api/image/feed');

        setImages(response.data);
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
    const calculatedHeight = Math.max(minHeight, images.length * imageHeight);

    return calculatedHeight;
  };
  return (
      <MainContainer style={{ height: `${calculateMainContainerHeight()}vh` }}>
        <LeftMainSection>
          <LeftHeader />
          {images.map((image, index) => {
            return (
                <PostContainer key={index}>
                  <PostBox
                      image={image.imageUrl}
                      likes={image.id}
                      tags={image.tags}
                  />
                </PostContainer>
            );
          })}
        </LeftMainSection>
        <RightMainSection>
          <RightHeader />
          <PostContainer>
            <WeatherComment>WeatherComment</WeatherComment>
            <MenuBar />
          </PostContainer>
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
  height: 100vh;
  width: 50%;
  position: fixed;
  top: 0px;
  right: -3px;
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