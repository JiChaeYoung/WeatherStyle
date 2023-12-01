package com.example.weatherstyle.controller;

import com.example.weatherstyle.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WeatherController {

    private final WeatherService weatherService;

    @Autowired
    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @GetMapping("/weather")
    public String getWeather() {
        return weatherService.getWeather("Seoul", "d37280ed18ab61b5f0632a932206c1eb");
    }
}

// 위에 안되면 아래로 해보면 됨
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//public class WeatherController {
//    private final WeatherService weatherService;
//
//    public WeatherController(WeatherService weatherService) {
//        this.weatherService = weatherService;
//    }
//
//    @GetMapping("/weather/{city}")
//    public String getWeather(@PathVariable String city) {
//        return weatherService.getWeatherData(city);
//    }
//}
