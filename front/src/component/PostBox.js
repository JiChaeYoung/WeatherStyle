import styled from 'styled-components';
import UserContainer from './UserContainer';
import ContentContainer from './ContentContainer';

function PostBox() {
  return (
    <PostSection>
      <UserContainer />
      <ImageContainer>ImageContainer</ImageContainer>
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

const ImageContainer = styled.div`
  border: 1px solid black;
  height: 90%;
  width: 70%;
`;
