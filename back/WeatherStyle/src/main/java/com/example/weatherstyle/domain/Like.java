package com.example.weatherstyle.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Like {
    @Id @GeneratedValue
    @Column(name = "like_id")
    private Long id;

    private int count;

    @Enumerated(EnumType.STRING)
    private WeatherEmotion weatherEmotion;

    @ManyToOne
    @JoinColumn(name = "post_id")
    private Post post;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;
}
