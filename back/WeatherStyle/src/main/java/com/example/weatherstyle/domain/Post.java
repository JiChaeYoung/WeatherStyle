package com.example.weatherstyle.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Post {
    @Id @GeneratedValue
    @Column(name = "post_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private String content;

    private String weatherDescription;

    private String image_url;

    @OneToMany(mappedBy = "like_id")
    private List<Like> likes = new ArrayList<>();

    @OneToMany(mappedBy = "comment_id")
    private List<Comment> comments = new ArrayList<>();

}
