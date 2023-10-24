package com.example.weatherstyle.domain.user;

import com.example.weatherstyle.domain.comment.Comment;
import com.example.weatherstyle.domain.like.Like;
import com.example.weatherstyle.domain.post.Post;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@Table(name = "users")
public class User {
    @Id @GeneratedValue
    @Column(name = "user_id")
    private Long id;

    private String email;

    private String password;

    private String name; //이름

    @Column(unique = true, length = 30)
    private String nickname; //별명

    private String phoneNumber; //휴대전화

    private String birth;
    
    private String profileImageUrl; //프로필 이미지 경로

    private RoleType role; // User, Admin

    @CreationTimestamp
    private Timestamp createDate;

    @Embedded
    private Address address;

    @OneToMany(mappedBy = "user")
    private List<Post> posts=new ArrayList<>();

    @OneToMany(mappedBy = "user") //사실 Like만 User알면 되는데 User한테 좋아요 누른 게시물 보여주려고
    private List<Like> user_like = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Comment> user_comment = new ArrayList<>();


    //==연관관계 메서드==//
    public void addLike(Like like){
        user_like.add(like);
        like.setUser(this);
    }
    public void addComment(Comment comment){
        user_comment.add(comment);
        comment.setUser(this);
    }

}
