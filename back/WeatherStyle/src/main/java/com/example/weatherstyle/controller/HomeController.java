<<<<<<< HEAD:back/WeatherStyle/src/main/java/com/example/weatherstyle/controller/HomeController.java
package com.example.weatherstyle.controller;

import com.example.weatherstyle.controller.dto.user.JoinReqDto;
import com.example.weatherstyle.entity.user.User;
import com.example.weatherstyle.service.UserService;
import com.example.weatherstyle.web.argumentresolver.Login;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@RequiredArgsConstructor
@Slf4j
public class HomeController {
    private final UserService userService;

    @GetMapping("/")
    public String homeLogin(@Login User loginMember, Model model){

        //세션 관리자에 저장된 회원 정보 조회
        if(loginMember==null){
            return "/image/feed";
        }
        model.addAttribute("member", loginMember);
        return "auth/loginForm";

    }
    @GetMapping("/auth/joinForm")
    public String joinForm() {
        log.info("/auth/joinForm 진입");
        return "auth/joinForm";
    }
    @PostMapping("/auth/joinForm")
    public String join(JoinReqDto joinReqDto){
        userService.회원가입(joinReqDto);
        return "redirect:/auth/loginForm";
    }
}
=======
//package com.example.weatherstyle.controller;
//
//import com.example.weatherstyle.controller.dto.user.JoinReqDto;
//import com.example.weatherstyle.service.UserService;
//import jakarta.persistence.PostRemove;
//import lombok.Getter;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//
//@Controller
//@RequiredArgsConstructor
//@Slf4j
//public class AuthController {
//    private final UserService userService;
//
//    @GetMapping("/auth/loginForm")
//    public String loginForm() {
//        log.info("/auth/loginForm 진입");
//        return "auth/loginForm";
//    }
//
//    @GetMapping("/auth/joinForm")
//    public String joinForm() {
//        log.info("/auth/joinForm 진입");
//        return "auth/joinForm";
//    }
//    @PostMapping("/auth/joinForm")
//    public String join(JoinReqDto joinReqDto){
//        userService.회원가입(joinReqDto);
//        return "redirect:/auth/loginForm";
//    }
//}
>>>>>>> 98864cc04bf753d69909fbaddd556ff68f47dc68:back/WeatherStyle/src/main/java/com/example/weatherstyle/controller/AuthController.java
