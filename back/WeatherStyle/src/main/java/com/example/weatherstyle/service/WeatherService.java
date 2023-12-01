package com.example.weatherstyle.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

public class WeatherService {

    private static final String WEATHER_URL = "http://api.openweathermap.org/data/2.5/weather?q={city}&appid={key}";

    public String getWeather(String city, String key) { // 메서드를 선언 도시 이름과 API 키를 파라미터로 받음
        RestTemplate restTemplate = new RestTemplate(); // 객체를 생성
        ResponseEntity<String> response = restTemplate.getForEntity(WEATHER_URL, String.class, city, key); // RestTemplate의 getForEntity 메서드를 이용하여 API를 호출하고, 그 결과를 ResponseEntity 객체로 받음

        if (response.getStatusCode().is2xxSuccessful()) {
            System.out.println(response.getBody());
            return response.getBody(); // 요청이 이루어졌다면, 응답 반환
        } else {
            throw new RuntimeException("API 호출에 실패했습니다. 상태 코드: " + response.getStatusCode()); // 요청이 실패했다면 예외를 던지기
        }
    }
}

//import org.springframework.web.client.RestTemplate;
//
//public class WeatherService {
//    private final String apiUrl = "http://api.openweathermap.org/data/2.5/weather?q={city}&appid={key}";  // 실제 API의 URL로 변경해야 합니다.
//    private final String apiKey = "d37280ed18ab61b5f0632a932206c1eb"; // 발급받은 API 키를 사용합니다.
//    private final RestTemplate restTemplate;
//
//    public WeatherService(RestTemplate restTemplate) {
//        this.restTemplate = restTemplate;
//    }
//
//    public String getWeatherData(String city) {
//        String url = apiUrl + "?q=" + city + "&appid=" + apiKey;
//        return restTemplate.getForObject(url, String.class);
//    }
//}
