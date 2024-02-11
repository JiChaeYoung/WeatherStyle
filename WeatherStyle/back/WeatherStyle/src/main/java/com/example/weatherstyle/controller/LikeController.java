package com.example.weatherstyle.controller;

import com.example.weatherstyle.entity.dto.user.LoginUser;
import com.example.weatherstyle.service.ImageService;
import com.example.weatherstyle.service.LikesService;
import com.example.weatherstyle.web.argumentresolver.Login;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class LikeController {
    private final LikesService likesService;
    private final ImageService imageService;

    @PostMapping("/likes/{imageId}")
    public ResponseEntity<?> like(@Login LoginUser loginUser, @PathVariable int imageId) {
//        if (loginUser == null) {
//            // loginUser가 null인 경우 처리
//            return new ResponseEntity<>("User not logged in", HttpStatus.UNAUTHORIZED);
//        }
        likesService.좋아요(imageId, loginUser.getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }

//    @DeleteMapping("/likes/{imageId}")
//    public ResponseEntity<?> unLike(@PathVariable int imageId,@Login LoginUser loginUser) {
//        likesService.좋아요취소(imageId, loginUser.getId());
//        return new ResponseEntity<>(HttpStatus.OK);
//    }
    @GetMapping("/likes/count/{imageId}")
    public ResponseEntity<Long> likeCount(@PathVariable int imageId) {
        long likeCount = likesService.좋아요개수(imageId);
        return ResponseEntity.ok(likeCount);
    }
}
