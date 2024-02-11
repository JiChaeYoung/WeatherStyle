package com.example.weatherstyle.entity.dto.follow;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FollowDto {

        private int id;
        private String nickname;
        private String name;
        private String profileImage;
        private boolean followState;
        private boolean equalUserState;
}
