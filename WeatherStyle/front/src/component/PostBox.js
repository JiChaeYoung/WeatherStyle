// PostBox.js
import React from 'react';
import styled from 'styled-components';
import UserContainer from './UserContainer';
import ContentContainer from './ContentContainer';
import { Link } from 'react-router-dom';

function ImageContainer({ images }) {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <img
                src={`http://localhost:8080/api/images/${images}`}
                alt='사진'
                style={{ maxWidth: '100%', height: 'auto' }}
            />
        </div>
    );
}

function PostBox({ image, likes, tags }) {
    let imagePath = image.replace('C:\\images\\', '');
    imagePath = imagePath.replace(/\\/g, '/');

    return (
        <PostSection>
            <UserContainer id={likes} />
            <Link to={`/userpost/${likes}`} key={likes}>
                <ImageContainer1>
                    <ImageContainer images={imagePath} />
                </ImageContainer1>
            </Link>
            <ContentContainer likes={likes} tags={tags} />
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 70%;
`;