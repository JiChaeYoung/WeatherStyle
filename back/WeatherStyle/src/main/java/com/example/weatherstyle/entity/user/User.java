package com.example.weatherstyle.entity.user;

import com.example.weatherstyle.entity.Address;
import com.example.weatherstyle.entity.comment.Comment;
import com.example.weatherstyle.entity.like.Likes;
import com.example.weatherstyle.entity.post.Image;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String email;

    private String password;

    private String name; //이름

    @Column(unique = true, length = 30)
    private String nickname; //별명

    private String phoneNumber; //휴대전화

    private String birth;
    
    private String profileImageUrl; //프로필 이미지 경로

    private RoleType role; // User, Admin

    private String aboutMe;

    @CreationTimestamp
    private Timestamp createDate;

    @Embedded
    private Address address; //값 객체 VO

    @OneToMany(mappedBy = "user")
    private List<Image> images =new ArrayList<>();

    @OneToMany(mappedBy = "user") //사실 Like만 User알면 되는데 User한테 좋아요 누른 게시물 보여주려고
    private List<Likes> user_like = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Comment> user_comment = new ArrayList<>();
}
