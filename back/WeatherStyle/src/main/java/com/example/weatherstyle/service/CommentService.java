package com.example.weatherstyle.service;

import com.example.weatherstyle.entity.comment.Comment;
import com.example.weatherstyle.entity.dto.comment.CommentRespDto;
import com.example.weatherstyle.entity.comment.CommentRepository;
import com.example.weatherstyle.entity.dto.user.LoginUser;
import com.example.weatherstyle.entity.post.Image;
import com.example.weatherstyle.entity.post.ImageRepository;

import com.example.weatherstyle.entity.user.User;
import com.example.weatherstyle.entity.user.UserRepository;
import com.example.weatherstyle.exception.MyImageIdNotFoundException;
import com.example.weatherstyle.web.argumentresolver.Login;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Supplier;

@Service
@Slf4j
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;
    private final ImageRepository imageRepository;
    private final UserRepository userRepository;

    @Transactional
    public void 댓글쓰기(CommentRespDto commentRespDto, LoginUser loginUser) {
        User user = userRepository.findById(loginUser.getId()).orElseThrow(null);

        commentRespDto.setUserId(user.getId());

        commentRepository.mSave(
                commentRespDto.getUserId(),
                commentRespDto.getImageId(),
                commentRespDto.getContent());
        Image imageEntity = imageRepository.findById(commentRespDto.getImageId()).orElseThrow(new Supplier<MyImageIdNotFoundException>() {
            @Override
            public MyImageIdNotFoundException get() {
                return new MyImageIdNotFoundException();
            }
        });
    }
    @Transactional
    public void 댓글삭제(int id){
        commentRepository.deleteById(id);
    }


    @Transactional(readOnly = true)
    public List<Comment> getCommentsByImageId(int imageId) {
        List<Comment> comments = commentRepository.findByImageId(imageId);
        for (Comment comment : comments) {
            comment.setUserNickname(comment.getUser().getNickname());
        }
        return comments;
    }

}
