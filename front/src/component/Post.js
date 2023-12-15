import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Post({ images }) {
  return (
    <Post1>
      {images.map((image, index) => {
        let imagePath = image.imageUrl.replace('C:\\images\\', '');
        imagePath = imagePath.replace(/\\/g, '/');
        return (
          <Posts key={index}>
            <Link to='/userpost' key={imagePath}></Link>
          </Posts>
        );
      })}
    </Post1>
  );
}

export default Post;

const Post1 = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: Row;
`;

const Posts = styled.div`
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  border: 1px solid white;
  width: 180px;
  height: 180px;
  margin: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  &:hover {
    background-color: lightgray;
  }
`;
