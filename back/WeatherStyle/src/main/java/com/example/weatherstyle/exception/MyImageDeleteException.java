package com.example.weatherstyle.exception;

public class MyImageDeleteException extends RuntimeException{
    private final String message;

    public MyImageDeleteException() {
        this.message = "게시물 작성자만 글을 지울 수 있습니다.";
    }

    public MyImageDeleteException(String message) {
        this.message = message;
    }

    @Override
    public String getMessage() {
        return message;
    }
}
