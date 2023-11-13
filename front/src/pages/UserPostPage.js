import styled from 'styled-components';

function UserPostPage() {
  return (
    <MainContainer>
      <Container>
        <Header></Header>
        <MainSection>
          <SideBarDiv>SideBarDiv</SideBarDiv>
          <PostSection>
            <PostDiv>PostDiv</PostDiv>
            <SettingDiv>SettingDiv</SettingDiv>
          </PostSection>
        </MainSection>
      </Container>
    </MainContainer>
  );
}

export default UserPostPage;

const MainContainer = styled.div``;

const Container = styled.div`
  border: 1px solid black;
  height: 100vh;
  width: 100%;
`;

const Header = styled.div`
  border: 1px solid black;
  height: 100px;
`;

const MainSection = styled.div`
  border: 1px solid black;
  display: flex;
  width: 100%;
  height: 90%;
`;

const SideBarDiv = styled.div`
  border: 1px solid black;
  width: 20%;
  height: 100%;
`;

const PostSection = styled.div`
  border: 1px solid black;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostDiv = styled.div`
  border: 1px solid black;
  width: 60%;
  height: 90%;
`;

const SettingDiv = styled.div`
  border: 1px solid black;
  width: 200px;
  height: 200px;
  margin-top: 30%;
  margin-left: 5%;
`;
