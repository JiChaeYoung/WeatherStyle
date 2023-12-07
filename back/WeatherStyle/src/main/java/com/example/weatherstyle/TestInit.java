package com.example.weatherstyle;

<<<<<<< HEAD
import com.example.weatherstyle.controller.dto.user.JoinReqDto;
import com.example.weatherstyle.entity.Address;
import com.example.weatherstyle.service.UserService;
import jakarta.annotation.PostConstruct;
=======
import com.example.weatherstyle.entity.dto.user.JoinReqDto;
import com.example.weatherstyle.service.UserService;
>>>>>>> 13483402eb3da5bf976fabdafd79794000134972
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class TestInit {

    private final UserService userService;

<<<<<<< HEAD
    @PostConstruct
    public void init(){
        userService.회원가입(new JoinReqDto("test@test.com","test","test","test","010-1234-5678","1999-04-07","Seoul"));
    }

}
=======
    public void init(){
        userService.회원가입(new JoinReqDto("test@hallym.co.kr","test","test","test","010-1234-5678","1999-04-07","Seoul"));
    }

}
>>>>>>> 13483402eb3da5bf976fabdafd79794000134972
