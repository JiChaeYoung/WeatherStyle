package com.example.weatherstyle.entity;

import jakarta.persistence.Embeddable;
import lombok.Data;

@Embeddable
@Data
public class Address {
    private String top;//시, 도
    private String mdl;//시, 구, 군
    private String leaf;//동, 읍, 면, 리
}
