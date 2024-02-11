package com.example.weatherstyle.entity.weather;

import org.springframework.stereotype.Component;

@Component
public class WeatherProperties {
    private String apiUrl;

    private String apiKey;

    public String getApiUrl() {
        return apiUrl;
    }

    public String getApiKey() {
        return apiKey;
    }
}
