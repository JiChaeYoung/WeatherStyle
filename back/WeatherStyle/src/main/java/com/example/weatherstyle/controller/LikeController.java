package com.example.weatherstyle.controller;

import com.example.weatherstyle.entity.user.User;
import com.example.weatherstyle.service.LikesService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@RequiredArgsConstructor
public class LikeController {
    private final LikesService likesService;

    @PostMapping("/likes/{imageId}")
    public ResponseEntity<?> like(@PathVariable int imageId, User loginUser) {
        likesService.좋아요(imageId, loginUser.getId());
        return new ResponseEntity<String>("ok", HttpStatus.OK);
    }

    @DeleteMapping("/likes/{imageId}")
    public ResponseEntity<?> unLike(@PathVariable int imageId,User loginUser) {
        likesService.좋아요취소(imageId, loginUser.getId());
        return new ResponseEntity<String>("ok", HttpStatus.OK);
    }
}
