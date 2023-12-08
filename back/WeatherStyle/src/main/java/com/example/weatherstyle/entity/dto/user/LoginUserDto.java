package com.example.weatherstyle.entity.dto.user;

import com.example.weatherstyle.entity.user.User;
import lombok.Data;

@Data
public class LoginUserDto {
    private int id;
    private String nickname;
    private String email;
    private String name;
    private String imageUrl;

    public LoginUserDto(User user) {
        this.id = user.getId();
        this.nickname = user.getNickname();
        this.email = user.getEmail();
        this.name = user.getName();
        this.imageUrl = user.getProfileImage();
    }

    public User getUser() {
        return User.builder().id(id).build();
    }
}
