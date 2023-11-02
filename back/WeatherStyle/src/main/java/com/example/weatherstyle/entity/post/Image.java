package com.example.weatherstyle.entity.post;

import com.example.weatherstyle.entity.Address;
import com.example.weatherstyle.entity.comment.Comment;
import com.example.weatherstyle.entity.like.Likes;
import com.example.weatherstyle.entity.user.User;
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
public class Image {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userId")
    private User user;

    private String content; //게시물에 글쓰기

    private String weatherDescription; //날씨관련 정보(게시물)

    private String image_url;

    private Address address;

    @CreationTimestamp
    private Timestamp creteDate;

    @OneToMany(mappedBy = "image")
    private List<Likes> likes = new ArrayList<>();

    @OrderBy("id DESC")//댓글 정렬
    @OneToMany(mappedBy = "image")
    private List<Comment> comments = new ArrayList<>();
    
    @Transient //테이블에 컬럼 안만들어짐
    private int likeCount; //좋아요 카운트

    @Transient
    private boolean likeState; //좋아요 눌렀는지 안눌렀는지

    @Transient
    private int commentCount;

}
