package com.example.weatherstyle.controller;

import com.example.weatherstyle.controller.dto.image.ImageDto;
import com.example.weatherstyle.controller.dto.user.UserProfileImageRespDto;
import com.example.weatherstyle.entity.post.Image;
import com.example.weatherstyle.entity.user.User;
import com.example.weatherstyle.service.ImageService;
import com.example.weatherstyle.web.argumentresolver.Login;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ImageController {
    private final ImageService imageService;

    @GetMapping( "/api/image/feed" )
    public ResponseEntity<List<Image>> feed( User loginUser) {
        List<Image> images = imageService.피드사진(loginUser.getId());
        return ResponseEntity.ok(images);
    }
    @GetMapping("/test/image/feed")
    public @ResponseBody List<Image> testFeed( User loginUser) {
        return imageService.피드사진(loginUser.getId());
    }

//    @GetMapping("/image/uploadForm")
//    public String imageUploadForm() {
//        return "image/image-upload";
//    }

    @PostMapping("/api/image")
    public ResponseEntity<?> imageUpload( User loginUser, ImageDto imageReqDto) {
        imageService.게시물업로드(loginUser.getId(), imageReqDto);
        return new ResponseEntity<>("Image uploaded successfully", HttpStatus.OK);
    }

    @GetMapping("/api/image/explore")
    public ResponseEntity<List<UserProfileImageRespDto>> imageExplore( User loginUser) {
        List<UserProfileImageRespDto> images = imageService.인기사진(loginUser.getId());
        return ResponseEntity.ok(images);
    }

    // 단독게시물 데이터 가져오는부분
    @GetMapping("/api/image/{imageId}")
    public ResponseEntity<List<Image>> board(@PathVariable int imageId,  User loginUser) {
        List<Image> image = imageService.단독게시물(imageId, loginUser.getId());
        return ResponseEntity.ok(image);
    }

    // 특정 게시물 삭제기능
    @DeleteMapping("/api/image/{imageId}/{ImageUserId}")
    public ResponseEntity<?> boardDelete(@PathVariable int imageId, @PathVariable int ImageUserId, User loginUser) {
        imageService.게시물삭제(imageId, ImageUserId, loginUser.getId());
        return new ResponseEntity<>("Image deleted successfully", HttpStatus.OK);
    }
}
