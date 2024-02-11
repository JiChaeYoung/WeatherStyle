package com.example.weatherstyle.exception;

public class ImageNotFoundException extends RuntimeException{
    private final String message;

    public ImageNotFoundException() {
        this.message = "해당 이미지를 찾을 수 없습니다.";
    }

    public ImageNotFoundException(String message) {
        this.message = message;
    }

    @Override
    public String getMessage() {
        return message;
    }
}
