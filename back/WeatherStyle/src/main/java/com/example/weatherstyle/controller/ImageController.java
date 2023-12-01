package com.example.weatherstyle.controller;

import com.example.weatherstyle.controller.dto.image.ImageDto;
import com.example.weatherstyle.entity.post.Image;
import com.example.weatherstyle.entity.user.User;
import com.example.weatherstyle.service.ImageService;
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
public class ImageController {
    private final ImageService imageService;

    @GetMapping( "/image/feed" )
    public String feed(@Login User loginUser, Model model) {
        System.out.println("loginUser : " + loginUser);
        model.addAttribute("images", imageService.피드사진(loginUser.getId()));

        return "image/feed";
    }

    @GetMapping("/test/image/feed")
    public @ResponseBody List<Image> testFeed(@Login User loginUser) {
        return imageService.피드사진(loginUser.getId());
    }

    @GetMapping("/image/uploadForm")
    public String imageUploadForm() {
        return "image/image-upload";
    }

    @PostMapping("/image")
    public String imageUpload(@Login User loginUser, ImageDto imageReqDto) {

        imageService.게시물업로드(loginUser.getId(),imageReqDto);

        return "redirect:/user/" + loginUser.getId();
    }

    @GetMapping("/image/explore")
    public String imageExplore(@Login User loginUser, Model model) {
        model.addAttribute("images", imageService.인기사진(loginUser.getId()));
        return "image/explore";
    }

    // 단독게시물 데이터 가져오는부분
    @GetMapping("image/{imageid}")
    public String board(Model model, @PathVariable int imageid,@Login User loginUser) {
        model.addAttribute("board", imageService.단독게시물(imageid,loginUser.getId()));
        return "image/board";
    }

    // 특정 게시물 삭제기능
    @DeleteMapping("image/{imageid}/{ImageUserId}")
    public ResponseEntity<?> boardDelete(Model model, @PathVariable int imageid, @PathVariable int ImageUserId,@Login User loginUser) {
        imageService.게시물삭제(imageid, ImageUserId, loginUser.getId());

        return new ResponseEntity<String>("ok", HttpStatus.OK);
    }
}
