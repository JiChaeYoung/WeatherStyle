package com.example.weatherstyle.entity.dto.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserProfileImageRespDto {
    private int id;
    private String imageUrl;
    private int likeCount;
    private int commentCount;
    private int userId;
}
