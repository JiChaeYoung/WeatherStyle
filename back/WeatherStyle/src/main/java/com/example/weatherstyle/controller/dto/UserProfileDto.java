package com.example.weatherstyle.controller.dto;

import com.example.weatherstyle.entity.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserProfileDto {
    private boolean followState; // true(팔로우 취소), false(팔로우)
    private User user;
    private List<UserProfilePostRespDto> posts;
    private int followerCount;
    private int followingCount;
    private int postCount;
}
