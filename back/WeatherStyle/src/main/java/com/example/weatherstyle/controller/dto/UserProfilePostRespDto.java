package com.example.weatherstyle.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserProfilePostRespDto {
    private int id;
    private String image_url;
    private int likeCount;
    private int commentCount;
    private int user_id;
}
