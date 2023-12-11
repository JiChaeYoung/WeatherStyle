package com.example.weatherstyle.entity.user;

import com.example.weatherstyle.entity.dto.follow.FollowDto;
import com.example.weatherstyle.entity.comment.Comment;
import com.example.weatherstyle.entity.like.Likes;
import com.example.weatherstyle.entity.post.Image;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@SqlResultSetMapping(
        name = "FollowRespDtoMapping",
        classes = @ConstructorResult(
                targetClass = FollowDto.class,
                columns = {
                        @ColumnResult(name="id", type = Integer.class),
                        @ColumnResult(name="nickname", type = String.class),
                        @ColumnResult(name="name", type = String.class),
                        @ColumnResult(name="profileImage", type = String.class),
                        @ColumnResult(name="followState", type = Boolean.class),
                        @ColumnResult(name="equalUserState", type = Boolean.class),
                }
        )
)
@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String email;
    private String password;
    private String name; //이름
    @Column(unique = true, length = 30)
    private String nickname; //별명
    private String phoneNumber; //휴대전화
    private String birth;
    private String profileImage; //프로필 이미지 경로
    @Enumerated(EnumType.STRING)
    private RoleType role; // User, Admin
    private String aboutMe;
    @CreationTimestamp
    private Timestamp createDate;
    //    @Embedded
    private String address; //값 객체 VO

    @OneToMany(mappedBy = "user")
    private List<Image> images;

    @OneToMany(mappedBy = "user") //사실 Like만 User알면 되는데 User한테 좋아요 누른 게시물 보여주려고
    private List<Likes> user_like;

    @OneToMany(mappedBy = "user")
    private List<Comment> user_comment;

    public User(String email, String password, String name, String nickname,
                String phoneNumber, String birth, String address, RoleType role) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.nickname = nickname;
        this.phoneNumber = phoneNumber;
        this.birth = birth;
        this.address = address;
        this.role = role;
    }
}
