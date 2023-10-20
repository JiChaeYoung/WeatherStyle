package com.example.weatherstyle.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class User {
    @Id @GeneratedValue
    @Column(name = "user_id")
    private Long id;

    private String email;

    private String password;

    private String name;

    private String nickname;

    private String phoneNumber;

    private String birth;

    @Embedded
    private Address address;

    @OneToMany(mappedBy = "post")
    private List<Post> postList=new ArrayList<>();

    @OneToMany(mappedBy = "like")
    private List<Like> user_like = new ArrayList<>();

    @OneToMany(mappedBy = "comment")
    private List<Comment> user_comment = new ArrayList<>();

}
