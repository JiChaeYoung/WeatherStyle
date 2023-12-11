import styled from 'styled-components';
import UserContainer from './UserContainer';
import ContentContainer from './ContentContainer';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ImageContainer() {
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

  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image.url} alt='사진' />
      ))}
    </div>
  );
}

function PostBox() {
  return (
    <PostSection>
      <UserContainer />
      <ImageContainer1>
        <ImageContainer />
      </ImageContainer1>
      <ContentContainer />
    </PostSection>
  );
}

export default PostBox;

const PostSection = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 65%;
`;

const ImageContainer1 = styled.div`
  border: 1px solid black;
  height: 90%;
  width: 70%;
`;
