package com.example.weatherstyle.entity.dto.comment;


import lombok.Data;

@Data
public class CommentRespDto {
    private String content;
    private int userId;
    private int imageId;
}
