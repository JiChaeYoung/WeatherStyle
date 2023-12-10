package com.example.weatherstyle.entity.dto.user;

import com.example.weatherstyle.entity.user.User;
import lombok.Data;

@Data
public class LoginUser {
    private int id;
    private String nickname;
    private String email;
    private String name;
    private String address;
    private String imageUrl;

    public LoginUser(User user) {
        this.id = user.getId();
        this.nickname = user.getNickname();
        this.email = user.getEmail();
        this.name = user.getName();
        this.address=user.getAddress();
        this.imageUrl = user.getProfileImage();
    }

    public User getUser() {
        return User.builder().id(id).build();
    }
}
