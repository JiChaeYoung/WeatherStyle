import styled from 'styled-components';

function MainPage() {
  return (
    <MainContainer>
      <MainSection>
        <HeaderContainer>
          <HeaderSection>
            <LogoDiv>LogoDiv</LogoDiv>
            <WeatherDiv>WeatherDiv</WeatherDiv>
          </HeaderSection>
          <HeaderSection>
            <WeatherDiv1>WeatherDiv1</WeatherDiv1>
          </HeaderSection>
        </HeaderContainer>
        <PostContainer>
          <PostSection>
            <UserPost>
              <UserContainer>
                <UserImage>UserImage</UserImage>
                <UserName>UserName</UserName>
                <UserLoacl>UserLoacl</UserLoacl>
                <UserWeader>UserWeader</UserWeader>
              </UserContainer>
              <ImageContainer>ImageContainer</ImageContainer>
              <ContentContainer>ContentContainer</ContentContainer>
            </UserPost>
          </PostSection>
          <CommentSection>
            <WeatherComment>WeatherComment</WeatherComment>
            <MenuBar>MenuBar</MenuBar>
          </CommentSection>
        </PostContainer>
      </MainSection>
    </MainContainer>
  );
}

export default MainPage;

const MainContainer = styled.div``;

const MainSection = styled.div`
  border: 1px solid black;
  height: 100vh;
`;

const HeaderContainer = styled.div`
  background-color: white;
  position: fixed;
  border: 1px solid black;
  height: 200px;
  width: 99%;
  display: flex;
`;

const HeaderSection = styled.div`
  border: 1px solid black;
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const PostContainer = styled.div`
  padding-top: 200px;
  border: 1px solid black;
  height: 80%;
  display: flex;
`;

const PostSection = styled.div`
  border: 1px solid black;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const CommentSection = styled.div`
  position: fixed;
  border: 1px solid black;
  width: 50%;
  height: 80%;
  display: flex;
  padding-left: 50%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const LogoDiv = styled.div`
  border: 1px solid black;
  display: flex;
  height: 80%;
  width: 20%;
`;

const WeatherDiv = styled.div`
  border: 1px solid black;
  display: flex;
  height: 80%;
  width: 50%;
`;

const WeatherDiv1 = styled.div`
  border: 1px solid black;
  display: flex;
  height: 80%;
  width: 80%;
`;

const UserPost = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 60%;
  margin: 5%;
`;

const UserImage = styled.div`
  border: 1px solid black;
  width: 50px;
  height: 50px;
`;

const UserName = styled.div`
  border: 1px solid black;
  width: 100px;
  height: 50px;
`;

const UserLoacl = styled.div`
  border: 1px solid black;
  width: 200px;
  height: 50px;
`;

const UserWeader = styled.div`
  border: 1px solid black;
  width: 100px;
  height: 50px;
`;

const UserContainer = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-evenly;
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

const WeatherComment = styled.div`
  border: 1px solid black;
  width: 80%;
  height: 70%;
`;

const MenuBar = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin-left: 65%;
`;
