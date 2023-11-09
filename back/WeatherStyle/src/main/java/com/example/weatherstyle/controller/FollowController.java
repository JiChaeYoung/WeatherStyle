package com.example.weatherstyle.controller;

import com.example.weatherstyle.controller.dto.follow.FollowDto;
import com.example.weatherstyle.entity.user.User;
import com.example.weatherstyle.service.FollowService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class FollowController {
    private final FollowService followService;

    @GetMapping("/follow/followingList/{pageUserId}")
    public String followingList(@PathVariable int pageUserId, User loginUser, Model model) {
        model.addAttribute("followingList", followService.팔로잉리스트(loginUser.getId(), pageUserId));
        return "follow/following-list";
    }

    @GetMapping("/follow/followerList/{pageUserId}")
    public String followerList(@PathVariable int pageUserId, User loginUser, Model model) {
        model.addAttribute("followerList", followService.팔로워리스트(loginUser.getId(), pageUserId));
        return "follow/follower-list";
    }

    @GetMapping("test/follow/followingList/{pageUserId}")
    public @ResponseBody List<FollowDto> testFollowingList(@PathVariable int pageUserId, User loginUser, Model model) {

        return followService.팔로잉리스트(loginUser.getId(), pageUserId);
    }

    @PostMapping("/follow/{id}")
    public ResponseEntity<?> follow(@PathVariable int id, User loginUser) {

        followService.팔로우(loginUser.getId(), id);
        return new ResponseEntity<String>("ok", HttpStatus.OK);
    }

    @DeleteMapping("/follow/{id}")
    public ResponseEntity<?> unFollow(@PathVariable int id, User loginUser) {

        followService.언팔로우(loginUser.getId(), id);
        return new ResponseEntity<String>("ok", HttpStatus.OK);
    }
}
