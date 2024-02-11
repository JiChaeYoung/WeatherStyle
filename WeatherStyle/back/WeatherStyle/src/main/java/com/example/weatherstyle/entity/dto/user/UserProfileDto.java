package com.example.weatherstyle.entity.dto.user;

import com.example.weatherstyle.entity.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class UserProfileDto {
    private boolean pageHost; // 페이지의 주인 확인
    private boolean followState; // true(팔로우 취소), false(팔로우)
    private User user;
    private List<UserProfileImageRespDto> images;
    private String aboutMe;
    private int followerCount;
    private int followingCount;
    private int imageCount;
}
