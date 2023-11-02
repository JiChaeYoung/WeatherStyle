package com.example.weatherstyle.controller.dto.comment;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class CommentDto {
    private int userId;
    private int imageId;
    private String text;
}
