import styled from 'styled-components';

function TestPage() {
  return (
    <MainContainer>
      <MainSection>
        <HeaderContainer>Header1</HeaderContainer>
        <PostContainer>
          <PostSection>
            <UserContainer>UserContainer</UserContainer>
            <ImageContainer>ImageContainer</ImageContainer>
            <ContentContainer>ContentContainer</ContentContainer>
          </PostSection>
        </PostContainer>
      </MainSection>
      <MainSection>
        <HeaderContainer>Header2</HeaderContainer>
        <PostContainer></PostContainer>
      </MainSection>
    </MainContainer>
  );
}

export default TestPage;

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const MainSection = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
`;

const HeaderContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
`;

const PostContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

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
