package com.example.weatherstyle.controller;

import com.example.weatherstyle.entity.dto.user.UserProfileDto;
import com.example.weatherstyle.entity.post.Image;
import com.example.weatherstyle.entity.user.User;
import com.example.weatherstyle.service.FollowService;
import com.example.weatherstyle.service.UserService;
import com.example.weatherstyle.web.argumentresolver.Login;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final FollowService followService;

    @GetMapping("/api/user/{pageUserId}")
    public ResponseEntity<UserProfileDto> profile(@PathVariable int pageUserId,  User loginUser){
        UserProfileDto userProfileDto = userService.회원프로필(pageUserId, loginUser);
        return ResponseEntity.ok(userProfileDto);
    }
    @GetMapping("/api/user/{pageUserId}/images")
    public ResponseEntity<List<Image>> getUserImages(@PathVariable int pageUserId,  User loginUser) {
        List<Image> images = userService.특정유저게시물(pageUserId, loginUser.getId());
        return ResponseEntity.ok(images);
    }
    //회원 수정 폼 가져오는 부분
    @GetMapping("/api/user/profileEdit")
    public ResponseEntity<User> profileEdit(@Login User loginUser) {
        User userEntity = userService.회원정보(loginUser);
        return ResponseEntity.ok(userEntity);
    }
    @PostMapping("/api/user/profileEditUpload")
    public ResponseEntity<?> profileEdit(@RequestParam("profileImage") MultipartFile file, int userId,  User loginUser) {
        if (userId == loginUser.getId()) {
            userService.프로필사진업로드(loginUser, file);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
    //실제 변경 업로드
    @PutMapping("/api/user")
    public ResponseEntity<?> userUpdate(@RequestBody User user) {
        userService.회원수정(user);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
