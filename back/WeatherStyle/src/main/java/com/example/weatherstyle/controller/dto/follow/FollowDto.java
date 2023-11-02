package com.example.weatherstyle.controller.dto.follow;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FollowDto {

        private int id;
        private String username;
        private String name;
        private String profileImage;
        private boolean followState;
        private boolean equalUserState;
}
