package com.example.weatherstyle.entity.dto.user;

import lombok.Data;

@Data
public class ImageUserRespDto {
    private int userId;
    private String imageUrl;
    private String nickname;
    private String address;
}
