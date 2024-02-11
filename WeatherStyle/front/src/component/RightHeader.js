import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RightHeader() {
  const [humidity, setHumidity] = useState('');
  const [wind, setWind] = useState('');
  const [minTemp, setMinTemp] = useState('');
  const [maxTemp, setMaxTemp] = useState('');
  const [rain, setRain] = useState('0');
  const [snow, setSnow] = useState('0');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const humidityData = await axios.get('/api/getHumidity');
        setHumidity(humidityData.data);

        const windData = await axios.get('/api/getWindSpeed');
        setWind(windData.data);

        const tempData = await axios.get('/api/getTempMinMax');
        setMinTemp(tempData.data.tempMin);
        setMaxTemp(tempData.data.tempMax);

        const rainSnowData = await axios.get('/api/getRainSnowInfo');
        setRain(rainSnowData.data.rain1h || '0');
        setSnow(rainSnowData.data.snow1h || '0');
      } catch (error) {
        console.error('데이터를 가져오는데 실패했습니다.', error);
      }
    };

    fetchData();
  }, []);

  return (
    <MainContainer>
      <HeaderContainer>
        <WeatherDiv>
          <Info>
            <Title>습기</Title>
            <InfoContent>{humidity} %</InfoContent>
          </Info>
          <Info>
            <Title>풍속</Title>
            <InfoContent>{wind} ms</InfoContent>
          </Info>
          <Info>
            <Title>최저온도</Title>
            <InfoContent>{minTemp} ºC</InfoContent>
          </Info>
          <Info>
            <Title>최고온도</Title>
            <InfoContent>{maxTemp} ºC</InfoContent>
          </Info>
          <Info>
            <Title>비</Title>
            <InfoContent>{rain}mm</InfoContent>
          </Info>
          <Info>
            <Title>눈</Title>
            <InfoContent>{snow}mm</InfoContent>
          </Info>
        </WeatherDiv>
      </HeaderContainer>
    </MainContainer>
  );
}

export default RightHeader;

const MainContainer = styled.div`
  margin-bottom: 193px;
`;

const HeaderContainer = styled.div`
  background: linear-gradient(to bottom, #e8f5ff, white);
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 150px;
  width: 50%;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0px;
  Right: 0px;
`;

const WeatherDiv = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: space-between;
  align-items: center;
  height: 80%;
  width: 80%;
`;

const Info = styled.ul`
  list-style: none;
  padding: 0;
`;

const Title = styled.li`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 5px;
`;

const InfoContent = styled.li`
  font-size: 1em;
  margin-bottom: 10px;
  color: #666;
`;
