package com.example.weatherstyle;

import com.example.weatherstyle.controller.dto.user.JoinReqDto;
import com.example.weatherstyle.entity.Address;
import com.example.weatherstyle.service.UserService;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class TestInit {

    private final UserService userService;

    @PostConstruct
    public void init(){
        userService.회원가입(new JoinReqDto("test@test.com","test","test","test","010-1234-5678","1999-04-07","Seoul"));
    }

}