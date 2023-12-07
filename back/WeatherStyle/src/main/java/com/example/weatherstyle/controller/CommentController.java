package com.example.weatherstyle.controller;

import com.example.weatherstyle.entity.dto.comment.CommentDto;
import com.example.weatherstyle.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class CommentController {
    private final CommentService commentService;

    @PostMapping("/comment")
    public ResponseEntity<?> comment(CommentDto commentRespDto) {
        System.out.println("commentRespDto : "+commentRespDto);
        commentService.댓글달기(commentRespDto);
        return new ResponseEntity<String>("ok", HttpStatus.CREATED);
    }

    @DeleteMapping("/comment/{id}")
    public ResponseEntity<?> commentDelete(@PathVariable int id) {
        commentService.댓글삭제(id);
        return new ResponseEntity<String>("ok", HttpStatus.OK);
    }
}
