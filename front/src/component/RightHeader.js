import styled from 'styled-components';

function RightHeader() {
  return (
    <MainContainer>
      <HeaderContainer>
        <WeatherDiv>WeatherDiv</WeatherDiv>
      </HeaderContainer>
    </MainContainer>
  );
}

export default RightHeader;

const MainContainer = styled.div``;

const HeaderContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
`;

const WeatherDiv = styled.div`
  border: 1px solid black;
  display: flex;
  height: 80%;
  width: 80%;
`;
