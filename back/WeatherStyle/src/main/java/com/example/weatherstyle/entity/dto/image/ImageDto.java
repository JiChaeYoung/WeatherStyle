package com.example.weatherstyle.entity.dto.image;

import com.example.weatherstyle.entity.Address;
import com.example.weatherstyle.entity.post.Image;
import com.example.weatherstyle.entity.user.User;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Path;

@Data
public class ImageDto {
    private MultipartFile file;
    private String weatherDescription;
    private String address;
    private String tags;

    public Image toEntity(String imageUrl, User userEntity) {
        return Image.builder()
                .address(address)
                .weatherDescription(weatherDescription)
                .imageUrl(imageUrl)
                .user(userEntity)
                .build();
    }
}
