package com.example.weatherstyle.controller;

import com.example.weatherstyle.entity.dto.follow.FollowDto;
import com.example.weatherstyle.entity.dto.user.LoginUser;
import com.example.weatherstyle.service.FollowService;
import com.example.weatherstyle.web.argumentresolver.Login;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/api")
public class FollowController {
    private final FollowService followService;

    @GetMapping("/user/{pageUserId}/following")
    public ResponseEntity<List<FollowDto>> getFollowingList(@PathVariable int pageUserId,@Login LoginUser loginUser) {
        List<FollowDto> followingList = followService.팔로잉리스트(loginUser.getId(), pageUserId);
        return ResponseEntity.ok(followingList);
    }

    @GetMapping("/user/{pageUserId}/followers")
    public ResponseEntity<List<FollowDto>> getFollowerList(@PathVariable int pageUserId,@Login LoginUser loginUser) {
        List<FollowDto> followerList = followService.팔로워리스트(loginUser.getId(), pageUserId);
        return ResponseEntity.ok(followerList);
    }

    @GetMapping("test/follow/followingList/{pageUserId}")
    public @ResponseBody List<FollowDto> testFollowingList(@PathVariable int pageUserId, @Login LoginUser loginUser) {

        return followService.팔로잉리스트(loginUser.getId(), pageUserId);
    }

    @PostMapping("/follow/{id}")
    public ResponseEntity<?> follow(@PathVariable int id,@Login LoginUser loginUser) {

        followService.팔로우(loginUser.getId(), id);
        return new ResponseEntity<String>("ok", HttpStatus.OK);
    }

    @DeleteMapping("/follow/{id}")
    public ResponseEntity<?> unFollow(@PathVariable int id,@Login LoginUser loginUser) {

        followService.언팔로우(loginUser.getId(), id);
        return new ResponseEntity<String>("ok", HttpStatus.OK);
    }
    @GetMapping("/checkFollowing/{pageUserId}")
    public ResponseEntity<Boolean> checkFollowing(@PathVariable int pageUserId, @Login LoginUser loginUser) {
        boolean isFollowing = followService.isFollowing(loginUser.getId(), pageUserId);
        return ResponseEntity.ok(isFollowing);
    }
}
