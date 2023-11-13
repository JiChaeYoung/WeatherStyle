import styled from 'styled-components';

function PostBox() {
  return (
    <PostSection>
      <UserContainer>UserContainer</UserContainer>
      <ImageContainer>ImageContainer</ImageContainer>
      <ContentContainer>ContentContainer</ContentContainer>
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
  width: 60%;
`;

const UserContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 12%;
  width: 100%;
`;

const ImageContainer = styled.div`
  border: 1px solid black;
  height: 90%;
  width: 70%;
`;

const ContentContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25%;
  width: 100%;
`;
