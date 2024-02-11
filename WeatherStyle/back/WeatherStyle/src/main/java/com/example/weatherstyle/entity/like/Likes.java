package com.example.weatherstyle.entity.like;

import com.example.weatherstyle.entity.post.Image;
import com.example.weatherstyle.entity.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.data.annotation.CreatedDate;

import java.sql.Timestamp;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Likes {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

//    @Enumerated(EnumType.STRING)
//    private WeatherEmotion weatherEmotion;

    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "IMAGEID")
    @JsonIgnore
    private Image image;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="USERID")
    @JsonIgnore
    private User user;

    @CreatedDate
    private Timestamp dateTime;


}
