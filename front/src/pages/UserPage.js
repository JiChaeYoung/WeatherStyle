import styled from 'styled-components';

function UserPage() {
  return (
    <MainContainer>
      <Container>
        <Header></Header>
        <MainSection>
          <SideBarDiv>SideBarDiv</SideBarDiv>
          <UserSection>
            <UserDiv>
              <ProfilDiv>
                <ProfilImage>ProfilImage</ProfilImage>
                <ProfilInfoDiv>
                  <ProfilInfo>ProfilInfo</ProfilInfo>
                  <FollowerDiv>FollowerDiv</FollowerDiv>
                </ProfilInfoDiv>
              </ProfilDiv>
              <PostDiv>
                <Post>
                  <Posts>Posts</Posts>
                  <Posts>Posts</Posts>
                  <Posts>Posts</Posts>
                  <Posts>Posts</Posts>
                  <Posts>Posts</Posts>
                  <Posts>Posts</Posts>
                </Post>
              </PostDiv>
            </UserDiv>
          </UserSection>
        </MainSection>
      </Container>
    </MainContainer>
  );
}

export default UserPage;

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

const UserSection = styled.div`
  border: 1px solid black;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserDiv = styled.div`
  border: 1px solid black;
  width: 80%;
  height: 90%;
`;

const ProfilDiv = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 30%;
  display: flex;
`;

const ProfilImage = styled.div`
  border: 1px solid black;
  width: 20%;
  height: 100%;
`;

const ProfilInfoDiv = styled.div`
  border: 1px solid black;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ProfilInfo = styled.div`
  border: 1px solid black;
  width: 40%;
  height: 50%;
`;

const FollowerDiv = styled.div`
  border: 1px solid black;
  width: 40%;
  height: 50%;
`;

const PostDiv = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Post = styled.div`
  border: 1px solid black;
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: Row;
`;

const Posts = styled.div`
  border: 1px solid black;
  width: 200px;
  height: 200px;
  margin: 1%;
`;
