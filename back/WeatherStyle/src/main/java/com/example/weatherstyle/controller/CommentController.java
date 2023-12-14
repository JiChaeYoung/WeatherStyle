package com.example.weatherstyle.controller;

import com.example.weatherstyle.entity.comment.Comment;
import com.example.weatherstyle.entity.dto.comment.CommentRespDto;
import com.example.weatherstyle.entity.dto.user.LoginUser;
import com.example.weatherstyle.entity.user.UserRepository;
import com.example.weatherstyle.service.CommentService;
import com.example.weatherstyle.web.argumentresolver.Login;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api")
public class CommentController {
    private final CommentService commentService;
    private final UserRepository userRepository;

    @PostMapping("/comment")
    public ResponseEntity<?> comment(@RequestBody CommentRespDto commentRespDto, @Login LoginUser loginUser) {
        System.out.println("commentRespDto : "+commentRespDto);
        commentService.댓글쓰기(commentRespDto, loginUser);
        return new ResponseEntity<String>("ok", HttpStatus.CREATED);
    }

    @DeleteMapping("/comment/{id}")
    public ResponseEntity<?> commentDelete(@PathVariable int id) {
        commentService.댓글삭제(id);
        return new ResponseEntity<String>("ok", HttpStatus.OK);
    }
    @GetMapping("/comments/{imageId}")
    public ResponseEntity<?> getCommentsByImageId(@PathVariable int imageId) {
        try {
            List<Comment> comments = commentService.getCommentsByImageId(imageId);
            return new ResponseEntity<>(comments, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error fetching comments: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
