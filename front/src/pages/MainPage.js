import styled from 'styled-components';
import LeftHeader from '../component/LeftHeader';
import RightHeader from '../component/RightHeader';
import PostBox from '../component/PostBox';

function MainPage() {
  return (
    <MainContainer>
      <LeftMainSection>
        <LeftHeader />
        <PostContainer>
          <PostBox />
        </PostContainer>
        <PostContainer>
          <PostBox />
        </PostContainer>
        <PostContainer>
          <PostBox />
        </PostContainer>
      </LeftMainSection>
      <RightMainSection>
        <RightHeader />
        <PostContainer>
          <WeatherComment>WeatherComment</WeatherComment>
          <MenuBar>MenuBar</MenuBar>
        </PostContainer>
      </RightMainSection>
    </MainContainer>
  );
}

export default MainPage;

const MainContainer = styled.div`
  display: flex;
  height: 300vh;
`;

const LeftMainSection = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const RightMainSection = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 100vh;
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
