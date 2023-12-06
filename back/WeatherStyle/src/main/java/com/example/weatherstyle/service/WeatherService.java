package com.example.weatherstyle.service;

import com.example.weatherstyle.entity.weather.WeatherInfo;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherService {
    private static final String WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API key}&lang=KR";
    private static final String WEATHER_KEY="bd7ce4f710393cae8b95c1c2925bb1c9";

    private static final String AIR_URL="https://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={API key}";

    public WeatherInfo getWeather(String city) {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(WEATHER_URL, String.class, city, WEATHER_KEY);

        if (response.getStatusCode().is2xxSuccessful()) {
            ObjectMapper mapper = new ObjectMapper();
            WeatherInfo weatherInfo = null;
            try {
                JsonNode root = mapper.readTree(response.getBody());
                weatherInfo = new WeatherInfo();

                weatherInfo = new WeatherInfo();
                weatherInfo.setTemperature(convertKelvinToCelsius(root.path("main").path("temp").asDouble()));
                weatherInfo.setWeather(root.path("weather").get(0).path("description").asText());
                weatherInfo.setHumidity(root.path("main").path("humidity").asText());
                weatherInfo.setWindSpeed(root.path("wind").path("speed").asText());
                weatherInfo.setTempMin(convertKelvinToCelsius(root.path("main").path("temp_min").asDouble()));
                weatherInfo.setTempMax(convertKelvinToCelsius(root.path("main").path("temp_max").asDouble()));
                // 위도와 경도 추출
                weatherInfo.setLat(root.path("city").path("coord").path("lat").asDouble());
                weatherInfo.setLon(root.path("city").path("coord").path("lon").asDouble());


                if (root.has("rain")) {
                    JsonNode rain = root.path("rain");
                    weatherInfo.setRain1h(rain.path("1h").asText("0")); // 값이 없는 경우 "0"으로 처리
                }
                if (root.has("snow")) {
                    JsonNode snow = root.path("snow");
                    weatherInfo.setSnow1h(snow.path("1h").asText("0"));
                }
            } catch (JsonProcessingException e) {
                e.printStackTrace();
            }

            System.out.println(weatherInfo);
            return weatherInfo;
        } else {
            throw new RuntimeException("API 호출에 실패했습니다. 상태 코드: " + response.getStatusCode());
        }
    }
    public int getAirQualityIndex(WeatherInfo  weatherInfo) {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(AIR_URL, String.class, weatherInfo.getLat(), weatherInfo.getLon(), WEATHER_KEY);


        if (response.getStatusCode().is2xxSuccessful()) {
            ObjectMapper mapper = new ObjectMapper();
            int aqi = 0;
            try {
                JsonNode root = mapper.readTree(response.getBody());
                aqi = root.path("list").get(0).path("main").path("aqi").asInt();
            } catch (JsonProcessingException e) {
                e.printStackTrace();
            }

            System.out.println("AQI: " + aqi);
            return aqi;
        } else {
            throw new RuntimeException("API 호출에 실패했습니다. 상태 코드: " + response.getStatusCode());
        }
    }

    private String convertKelvinToCelsius(double kelvin) {
        double celsius = kelvin - 273.15;
        return String.format("%.2f", celsius);
    }
}

