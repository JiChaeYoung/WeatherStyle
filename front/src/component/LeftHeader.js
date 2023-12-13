import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import mainlogo from '../../public/images/logoopng.png';
import axios from 'axios';

function LeftHeader() {
  const [profileData, setProfileData] = useState(null);
  const [weather, setWeather] = useState('');
  const [temperature, setTemperature] = useState('');

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const weatherData = await axios.get('/api/weather');
        setWeather(weatherData.data);
        const temperatureData = await axios.get('/api/getTemperature');
        setTemperature(temperatureData.data);
        const response = await axios.get(`/api/user/myinfo`);
        setProfileData(response.data);
      } catch (error) {
        console.error('날씨 정보를 가져오는데 실패했습니다.', error);
      }
    };

    getWeatherData();
  }, []);

  if (!profileData) {
    return <div>Loading...</div>; // 데이터가 아직 로드되지 않았을 때 로딩 메시지를 표시
  }

  return (
    <MainContainer>
      <HeaderContainer>
        <LogoDiv>
          <img src={mainlogo} alt='weatherStyle logo' />
        </LogoDiv>
        <WeatherDiv>
          <Info>
            <Title>주소</Title>
            <InfoContent>{profileData.user.address}</InfoContent>
          </Info>
          <Info>
            <Title>온도</Title>
            <InfoContent>{temperature} ºC</InfoContent>
          </Info>
          <Info>
            <Title>날씨</Title>
            <InfoContent>{weather}</InfoContent>
          </Info>
        </WeatherDiv>
      </HeaderContainer>
    </MainContainer>
  );
}

export default LeftHeader;

const MainContainer = styled.div`
  margin-bottom: 193px;
`;

const HeaderContainer = styled.div`
  background: linear-gradient(to bottom, #fff0f5, white);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 150px;
  width: 50%;

  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0px;
  left: 0px;
`;

const LogoDiv = styled.div`
  display: flex;
  height: 50%;
  width: 30%;
`;

const WeatherDiv = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: space-around;
  height: 80%;
  width: 50%;
`;

const Info = styled.ul`
  list-style: none;
  margin-top: 25px;
  padding: 0;
`;

const InfoContent = styled.li`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Title = styled.li`
  font-size: 1em;
  margin-bottom: 10px;
  color: #666;
`;
