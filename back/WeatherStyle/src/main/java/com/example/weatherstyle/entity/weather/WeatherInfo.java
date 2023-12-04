package com.example.weatherstyle.entity.weather;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter@Setter
@Data
public class WeatherInfo {
    private String temperature;
    private String weather;
    private String humidity;
    private String windSpeed;
    private String tempMin;
    private String tempMax;
    private String rain1h;
    private String snow1h;
    private int aqi;
    private double lat;
    private double lon;

}
