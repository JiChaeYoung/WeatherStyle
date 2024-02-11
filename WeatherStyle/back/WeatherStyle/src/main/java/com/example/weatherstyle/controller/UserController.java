package com.example.weatherstyle.controller;

import com.example.weatherstyle.entity.dto.user.LoginUser;
import com.example.weatherstyle.entity.dto.user.UserProfileDto;
import com.example.weatherstyle.entity.dto.user.UserUpdateForm;
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
@RequestMapping("/api")
public class UserController {
    private final UserService userService;

    @ResponseBody
    @GetMapping("/user/{pageUserId}")
    public ResponseEntity<UserProfileDto> profile(@PathVariable int pageUserId,  @Login LoginUser loginUser){
        UserProfileDto userProfileDto = userService.회원프로필(pageUserId, loginUser);
        return ResponseEntity.ok(userProfileDto);
    }

    @ResponseBody
    @GetMapping("/user/{pageUserId}/images")
    public ResponseEntity<List<Image>> getUserImages(@PathVariable int pageUserId,  @Login LoginUser loginUser) {
        List<Image> images = userService.특정유저게시물(pageUserId, loginUser.getId());
        return ResponseEntity.ok(images);
    }
//    @ResponseBody
//    @GetMapping("/user/profile")
//    public ResponseEntity<User> profileEdit(@Login LoginUser loginUser) {
//        User userEntity = userService.회원정보(loginUser);
//        return ResponseEntity.ok(userEntity);
//    }
    @PostMapping("/user/profileEditUpload")
    public ResponseEntity<?> profileEdit(@RequestParam("profileImage") MultipartFile file,  @Login LoginUser loginUser) {
        userService.프로필사진업로드(loginUser, file);

        return new ResponseEntity<>(HttpStatus.OK);
    }
    //실제 변경 업로드
    @PutMapping("/user")
    public ResponseEntity<?> userUpdate(@RequestBody UserUpdateForm user, @Login LoginUser loginUser) {
        userService.회원수정(user, loginUser.getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @ResponseBody
    @GetMapping("/user/search")
    public ResponseEntity<?> userSearch(@Login LoginUser loginUser, String nickName){
        List<User> userList = userService.회원검색(nickName, loginUser.getId());
        if(userList==null){
            return new ResponseEntity<>("User not found", HttpStatus.UNAUTHORIZED);
        }
        return ResponseEntity.ok(userList);
    }

    @ResponseBody
    @GetMapping("/user/myinfo")
    public ResponseEntity<UserProfileDto> myProfile(@Login LoginUser loginUser){
        UserProfileDto profileDto = userService.내정보(loginUser.getId());
        return ResponseEntity.ok(profileDto);
    }
}
