package com.example.weatherstyle.entity.dto.user;

import com.example.weatherstyle.entity.user.RoleType;
import com.example.weatherstyle.entity.user.User;
import lombok.*;

@Data
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserUpdateForm {
    private String nickname;
    private String aboutMe;
    private String phoneNumber;
    private String address;

    public User toEntity() {
        return User.builder()
                .nickname(nickname)
                .aboutMe(aboutMe)
                .phoneNumber(phoneNumber)
                .address(address)
                .role(RoleType.USER)
                .build();
    }
}
