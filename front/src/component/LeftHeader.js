import styled from 'styled-components';

function LeftHeader() {
  return (
    <MainContainer>
      <HeaderContainer>
        <LogoDiv>LogoDiv</LogoDiv>
        <WeatherDiv>WeatherDiv</WeatherDiv>
      </HeaderContainer>
    </MainContainer>
  );
}

export default LeftHeader;

const MainContainer = styled.div``;

const HeaderContainer = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  width: 100%;
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
