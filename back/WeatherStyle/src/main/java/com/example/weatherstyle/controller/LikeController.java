package com.example.weatherstyle.controller;

import com.example.weatherstyle.entity.dto.user.LoginUser;
import com.example.weatherstyle.service.LikesService;
import com.example.weatherstyle.web.argumentresolver.Login;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class LikeController {
    private final LikesService likesService;

    @PostMapping("/likes/{imageId}")
    public ResponseEntity<?> like(@PathVariable int imageId,@Login LoginUser loginUser) {
        likesService.좋아요(imageId, loginUser.getId());
        return new ResponseEntity<String>("ok", HttpStatus.OK);
    }

    @DeleteMapping("/likes/{imageId}")
    public ResponseEntity<?> unLike(@PathVariable int imageId,@Login LoginUser loginUser) {
        likesService.좋아요취소(imageId, loginUser.getId());
        return new ResponseEntity<String>("ok", HttpStatus.OK);
    }
}
