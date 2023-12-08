package com.example.weatherstyle.controller;

import com.example.weatherstyle.entity.dto.user.JoinReqDto;
import com.example.weatherstyle.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api")
public class HomeController {
    private final UserService userService;

//    @GetMapping("/")
//    public ResponseEntity<User> homeLogin(User loginUser){
//
//        //세션 관리자에 저장된 회원 정보 조회
//        if(loginUser==null){
//            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
//        }
//        return ResponseEntity.ok(loginUser);
//
//    }
    @GetMapping("/auth/joinForm")
    public ResponseEntity<String> joinForm() {
        log.info("/auth/joinForm 진입");
        return ResponseEntity.ok("auth/joinForm 진입");
    }
    @PostMapping("/auth/joinForm")
    public ResponseEntity<String> join(@RequestBody JoinReqDto joinReqDto){
        userService.회원가입(joinReqDto);
        return ResponseEntity.ok("회원가입 완료");
    }
}
