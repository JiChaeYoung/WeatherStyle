package com.example.weatherstyle.entity.dto.user;

import com.example.weatherstyle.entity.user.RoleType;
import com.example.weatherstyle.entity.user.User;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Data
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class JoinReqDto {
    private String email;
    private String name;
    private String nickname;
    private String password;
    private String phoneNumber;
    private String birth;
    private String address;

    public User toEntity() {
        return User.builder()
                .email(email)
                .name(name)
                .nickname(nickname)
                .password(password)
                .phoneNumber(phoneNumber)
                .birth(birth)
                .address(address)
                .role(RoleType.USER)
                .build();
    }
}