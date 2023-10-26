package com.example.weatherstyle.entity.post;

import com.example.weatherstyle.entity.Address;
import com.example.weatherstyle.entity.comment.Comment;
import com.example.weatherstyle.entity.like.Like;
import com.example.weatherstyle.entity.user.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Post {
    @Id @GeneratedValue
    @Column(name = "post_id")
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    private String content; //게시물에 글쓰기

    private String weatherDescription; //날씨관련 정보(게시물)

    private String image_url;

    private Address address;

    @CreationTimestamp
    private Timestamp creteDate;

    @OneToMany(mappedBy = "post")
    private List<Like> likes = new ArrayList<>();

    @OrderBy("id DESC")//댓글 정렬
    @OneToMany(mappedBy = "post")
    private List<Comment> comments = new ArrayList<>();
    
    @Transient //테이블에 컬럼 안만들어짐
    private int likeCount; //좋아요 카운트

    @Transient
    private boolean likeState; //좋아요 눌렀는지 안눌렀는지

    @Transient
    private int commentCount;

    //==연관관계 메소드==//
    public void setUser(User user){
        this.user=user;
        user.getPosts().add(this);
    }
    public void addLike(Like like){
        likes.add(like);
        like.setPost(this);
    }
    public void addComment(Comment comment){
        comments.add(comment);
        comment.setPost(this);
    }

}
