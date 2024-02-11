package com.example.weatherstyle.entity.post;

import com.example.weatherstyle.entity.dto.user.UserProfileImageRespDto;
import com.example.weatherstyle.entity.Address;
import com.example.weatherstyle.entity.comment.Comment;
import com.example.weatherstyle.entity.like.Likes;
import com.example.weatherstyle.entity.tag.Tag;
import com.example.weatherstyle.entity.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.beans.factory.annotation.Value;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@SqlResultSetMapping(name = "UserProfileImageRespDtoMapping",
        classes = @ConstructorResult(
                targetClass = UserProfileImageRespDto.class,
                columns = {
                        @ColumnResult(name = "ID", type = Integer.class),
                        @ColumnResult(name = "IMAGE_URL", type = String.class),
                        @ColumnResult(name = "likeCount", type = Integer.class),
                        @ColumnResult(name = "commentCount", type = Integer.class),
                        @ColumnResult(name = "USERID", type = Integer.class)
                }))
@Entity
@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USERID")
    @JsonIgnore
    private User user;

    private String weatherDescription; //날씨관련 정보(게시물)

    private String imageUrl;

    private String address;

    @CreationTimestamp
    @Column(name = "CREATEDATE")
    private Timestamp createDate;

    @OrderBy("id DESC")
    @OneToMany(mappedBy = "image", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Comment> comments;

    @JsonIgnoreProperties({ "image" })
    @OneToMany(mappedBy = "image", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Likes> likes;

    @Transient //테이블에 컬럼 안만들어짐
    private int likeCount; //좋아요 카운트

    @Transient
    private boolean likeState; //좋아요 눌렀는지 안눌렀는지

    @Transient
    private int commentCount;

    @OneToMany(mappedBy = "image")
    @JsonIgnoreProperties({ "image" }) // Jackson한테 내리는 명령
    private List<Tag> tags;




}