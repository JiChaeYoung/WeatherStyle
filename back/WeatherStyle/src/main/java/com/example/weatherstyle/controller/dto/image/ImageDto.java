package com.example.weatherstyle.controller.dto.image;

import com.example.weatherstyle.entity.Address;
import com.example.weatherstyle.entity.post.Image;
import com.example.weatherstyle.entity.user.User;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter @Setter
public class ImageDto {
    private MultipartFile file;
    private String weatherDescription;
    private Address address;

    public Image toEntity(String imageUrl, User userEntity) {
        return Image.builder()
                .address(address)
                .weatherDescription(weatherDescription)
                .imageUrl(imageUrl)
                .user(userEntity)
                .build();
    }
}
