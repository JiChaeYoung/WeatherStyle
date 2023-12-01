import styled from 'styled-components';

function PostContent() {
  return (
    <Container>
      <ContentDiv>ContentDiv</ContentDiv>
    </Container>
  );
}

export default PostContent;

const Container = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 100%;
`;

const ContentDiv = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 80%;
`;
