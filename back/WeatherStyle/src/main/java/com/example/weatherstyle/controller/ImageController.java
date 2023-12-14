package com.example.weatherstyle.controller;

import com.example.weatherstyle.entity.dto.image.ImageDto;
import com.example.weatherstyle.entity.dto.image.ImageUpdateDto;
import com.example.weatherstyle.entity.dto.user.ImageUserRespDto;
import com.example.weatherstyle.entity.dto.user.LoginUser;
import com.example.weatherstyle.entity.dto.user.UserProfileImageRespDto;
import com.example.weatherstyle.entity.post.Image;
import com.example.weatherstyle.entity.weather.WeatherInfo;
import com.example.weatherstyle.service.ImageService;
import com.example.weatherstyle.service.WeatherService;
import com.example.weatherstyle.web.argumentresolver.Login;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.net.MalformedURLException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class ImageController {
    private final ImageService imageService;
    private final WeatherService weatherService;

    @ResponseBody
    @GetMapping( "/image/feed" )
    public ResponseEntity<List<Image>> feed(@Login LoginUser loginUser) {
        List<Image> images = imageService.피드사진(loginUser.getId());
        return ResponseEntity.ok(images);
    }
    @ResponseBody
    @GetMapping("/images/{filename}")
    public Resource downloadImage(@PathVariable("filename") String filename) throws
            MalformedURLException {
        return new UrlResource("file:" + imageService.getFullPath(filename));
    }
    @GetMapping("/image/feed/tag")
    public ResponseEntity <List<Image>> testFeed(@Login LoginUser loginUser) {
        WeatherInfo weather = weatherService.getWeather(loginUser.getAddress());
        List<Image> imagesBySimilarTag = imageService.getImagesBySimilarTag(loginUser.getId(), weather.getWeather());

        return ResponseEntity.ok(imagesBySimilarTag);

    }

//    @GetMapping("/image/uploadForm")
//    public String imageUploadForm() {
//        return "image/image-upload";
//    }

    @PostMapping("/image")
    public ResponseEntity<?> imageUpload(@Login LoginUser loginUser, @ModelAttribute ImageDto imageReqDto) {
        imageService.게시물업로드(loginUser.getId(), imageReqDto);
        return new ResponseEntity<>("Image uploaded successfully", HttpStatus.OK);
    }

//    @GetMapping("/image/{filename}")
//    public int getImageIdByImageUrl(@RequestParam String imageUrl) {
//        Image image = imageService.findId(imageUrl);
//
//        return image.getId();
//    }
    @ResponseBody
    @GetMapping("/image/{imageId}")
    public ResponseEntity<Image> board(@PathVariable int imageId,  @Login LoginUser loginUser) {
        Image image = imageService.단독게시물(imageId, loginUser.getId());
        return ResponseEntity.ok(image);
    }

    // 특정 게시물 삭제기능
    @DeleteMapping("/image/{imageId}/{ImageUserId}")
    public ResponseEntity<?> boardDelete(@PathVariable int imageId, @PathVariable int ImageUserId, @Login LoginUser loginUser) {
        imageService.게시물삭제(imageId, ImageUserId, loginUser.getId());
        return new ResponseEntity<>("Image deleted successfully", HttpStatus.OK);
    }
    @PutMapping("/image/{imageId}/{imageUserId}")
    public ResponseEntity<?> imageUpdate(@PathVariable int imageId, @PathVariable int imageUserId, @Login LoginUser loginUser, @ModelAttribute ImageUpdateDto imageUpdateDto){
        imageService.게시물수정(loginUser.getId(), imageId,imageUserId,imageUpdateDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @ResponseBody
    @GetMapping("/user/infoByImage/{imageId}")
    public ResponseEntity<ImageUserRespDto> getUserInfoByImageId(@PathVariable int imageId) {
        ImageUserRespDto userInfo = imageService.getUserInfoByImageId(imageId);
        return ResponseEntity.ok(userInfo);
    }
}