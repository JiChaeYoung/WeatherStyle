package com.example.weatherstyle.service;

import com.example.weatherstyle.controller.dto.comment.CommentDto;
import com.example.weatherstyle.entity.comment.CommentRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;

    @Transactional
    public void 댓글달기(CommentDto commentDto){
        commentRepository.mSave(commentDto.getUserId(),
                commentDto.getImageId(),
                commentDto.getText());
    }
    @Transactional
    public void 댓글삭제(int id){
        commentRepository.deleteById(id);
    }

}
