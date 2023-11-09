package com.example.weatherstyle.controller;

import com.example.weatherstyle.controller.dto.user.UserProfileDto;
import com.example.weatherstyle.entity.follow.FollowRepository;
import com.example.weatherstyle.entity.post.Image;
import com.example.weatherstyle.entity.user.User;
import com.example.weatherstyle.service.FollowService;
import com.example.weatherstyle.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final FollowService followService;

    @GetMapping("/user/{pageUserId}")
    public String profile(@PathVariable int pageUserId, User loginUser, Model model){
        UserProfileDto userProfileDto=userService.회원프로필(pageUserId, loginUser);
        model.addAttribute("respDto", userProfileDto);
        model.addAttribute("followingList", followService.팔로잉리스트(loginUser.getId(), pageUserId));
        model.addAttribute("followerList", followService.팔로워리스트(loginUser.getId(), pageUserId));

        List<Image> UserBoard = userService.특정유저게시물(pageUserId, loginUser.getId());
        model.addAttribute("board", UserBoard);
        return "user/profile";
    }
    @GetMapping("/user/profileEdit")
    public String profileEdit(User loginUser, Model model) {
        User userEntity = userService.회원정보(loginUser);
        model.addAttribute("respDto",userService.회원프로필(loginUser.getId(), loginUser));
        model.addAttribute("user", userEntity);
        return "user/profile-edit";
    }
    @PutMapping("/user")
    public ResponseEntity<?> userUpdate(User user) {
        userService.회원수정(user);
        return new ResponseEntity<String>("ok", HttpStatus.OK);
    }
    @PostMapping("/user/profileEditUpload")
    public String profileEdit(@RequestParam("profileImage") MultipartFile file, int userId, User loginUser) {
        if (userId == loginUser.getId()) {
            userService.프로필사진업로드(loginUser, file);
        }

        return "redirect:/user/profile-edit";
    }
    @PostMapping("/user/profileUpload")
    public String userProfileUpload(@RequestParam("profileImage") MultipartFile file, int userId, User loginUser) {
        if (userId == loginUser.getId()) {
            userService.프로필사진업로드(loginUser, file);
        }

        return "redirect:/user/" + userId;
    }
}
