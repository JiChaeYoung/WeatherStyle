import styled, { keyframes } from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Header() {
    const [weather, setWeather] = useState('');
    const [temperature, setTemperature] = useState('');
    const location = '서울시 강남구';
    const [humidity, setHumidity] = useState('');

    useEffect(() => {
        const getWeatherData = async () => {
            try {
                // 날씨 데이터를 가져옵니다.
                const weatherData = await axios.get('/api/weather');
                setWeather(weatherData.data);

                // 온도 데이터를 가져옵니다.
                const temperatureData = await axios.get('/api/getTemperature');
                setTemperature(temperatureData.data);

                const humidityData = await axios.get('/api/getHumidity');
                setHumidity(humidityData.data);
            } catch (error) {
                console.error('날씨 정보를 가져오는데 실패했습니다.', error);
            }
        };

        getWeatherData();
    }, []);

    return (
        <HeaderDiv>
            <LogoDiv>
                <img src='./logopng.png' alt='Logo' />
            </LogoDiv>
            <InfoDiv>
                <Title>날씨</Title>
                <Content>{weather}</Content>
            </InfoDiv>
            <InfoDiv>
                <Title>온도</Title>
                <Content>{temperature} ºC</Content>
            </InfoDiv>
            <InfoDiv>
                <Title>현재 위치</Title>
                <Content>{location}</Content>
            </InfoDiv>
            <InfoDiv>
                <Title>습도</Title>
                <Content>{humidity} %</Content>
            </InfoDiv>
        </HeaderDiv>
    );
}

export default Header;

const moveGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const HeaderDiv = styled.div`
  display: flex;
  height: 100px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  background: white;
  background-size: 200% 200%;

  &:hover {
    background: ${(props) =>
            props.isRaining
                    ? 'linear-gradient(270deg, #BEEFFF, white)'
                    : 'linear-gradient(270deg, #FFCA9B, white)'};
    animation: ${moveGradient} 3s linear infinite;
  }
`;

const InfoDiv = styled.div`
  width: 15%;
  height: 85%;
  margin: 8px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoDiv = styled.div`
  width: 20%;
  height: 100%;
  margin-right: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Content = styled.div`
  font-size: 1em;
  color: #666;
`;