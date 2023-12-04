package com.example.weatherstyle.controller.dto.user;

import com.example.weatherstyle.entity.Address;
import com.example.weatherstyle.entity.user.RoleType;
import com.example.weatherstyle.entity.user.User;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter @Setter
public class JoinReqDto {
    private String email;
    private String password;
    private String name;
    private String nickname;
    private String phoneNumber;
    private String birth;
    private String address;

    public User toEntity(){
        return User.builder()
                .email(email)
                .password(password)
                .name(name)
                .nickname(nickname)
                .phoneNumber(phoneNumber)
                .birth(birth)
                .address(address)
                .role(RoleType.USER)
                .build();
    }
}
