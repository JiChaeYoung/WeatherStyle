package com.example.weatherstyle.controller;

import com.example.weatherstyle.entity.dto.user.LoginUser;
import com.example.weatherstyle.entity.weather.WeatherInfo;
import com.example.weatherstyle.service.WeatherService;
import com.example.weatherstyle.web.argumentresolver.Login;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class WeatherController {

    private final WeatherService weatherService;

    @GetMapping("/api/weather")
    public ResponseEntity<String> getWeather(@Login LoginUser loginUser) {
        try {
            WeatherInfo weatherInfo = weatherService.getWeather(loginUser.getAddress());
            return ResponseEntity.ok(weatherInfo.getWeather());
        } catch (Exception e) {
            throw new RuntimeException("날씨 정보를 가져오는 데 실패했습니다", e);
        }
    }

    @GetMapping("/api/getTemperature")
    public ResponseEntity<String> getTemperature(@Login LoginUser loginUser) {
        try {
            WeatherInfo weatherInfo = weatherService.getWeather(loginUser.getAddress());
            return ResponseEntity.ok(weatherInfo.getTemperature());
        } catch (Exception e) {
            throw new RuntimeException("온도 정보를 가져오는 데 실패했습니다", e);
        }
    }

    @GetMapping("/api/getHumidity")
    public ResponseEntity<String> getHumidity(@Login LoginUser loginUser) {
        try {
            WeatherInfo weatherInfo = weatherService.getWeather(loginUser.getAddress());
            return ResponseEntity.ok(weatherInfo.getHumidity());
        } catch (Exception e) {
            throw new RuntimeException("습도 정보를 가져오는 데 실패했습니다", e);
        }
    }

    @GetMapping("/api/getWindSpeed")
    public ResponseEntity<String> getWindSpeed(@Login LoginUser loginUser) {
        try {
            WeatherInfo weatherInfo = weatherService.getWeather(loginUser.getAddress());
            return ResponseEntity.ok(weatherInfo.getWindSpeed());
        } catch (Exception e) {
            throw new RuntimeException("풍속 정보를 가져오는 데 실패했습니다", e);
        }
    }

    @GetMapping("/api/getTempMinMax")
    public ResponseEntity<Map<String, String>> getTempMinMax(@Login LoginUser loginUser) {
        try {
            WeatherInfo weatherInfo = weatherService.getWeather(loginUser.getAddress());
            Map<String, String> temps = new HashMap<>();
            temps.put("tempMin", weatherInfo.getTempMin());
            temps.put("tempMax", weatherInfo.getTempMax());
            return ResponseEntity.ok(temps);
        } catch (Exception e) {
            throw new RuntimeException("최저/최고 기온 정보를 가져오는 데 실패했습니다", e);
        }
    }

    @GetMapping("/api/getRainSnowInfo")
    public ResponseEntity<Map<String, String>> getRainSnowInfo(@Login LoginUser loginUser) {
        try {
            WeatherInfo weatherInfo = weatherService.getWeather(loginUser.getAddress());
            Map<String, String> rainSnowInfo = new HashMap<>();
            rainSnowInfo.put("rain1h", weatherInfo.getRain1h());
            rainSnowInfo.put("snow1h", weatherInfo.getSnow1h());
            return ResponseEntity.ok(rainSnowInfo);
        } catch (Exception e) {
            throw new RuntimeException("강우량 및 적설량 정보를 가져오는 데 실패했습니다", e);
        }
    }
    @GetMapping("/api/getAQI")
    public ResponseEntity<Integer> getAirQualityIndex(@Login LoginUser loginUser) {
        try {
            // 도시의 날씨 정보를 먼저 가져옴
            WeatherInfo weatherInfo = weatherService.getWeather(loginUser.getAddress());

            // 날씨 정보를 이용하여 대기질 지수를 가져옴
            int aqi = weatherService.getAirQualityIndex(weatherInfo);

            return ResponseEntity.ok(aqi);
        } catch (Exception e) {
            throw new RuntimeException("대기질 지수를 가져오는 데 실패했습니다", e);
        }
    }

}

