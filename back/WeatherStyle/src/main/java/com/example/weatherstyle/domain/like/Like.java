package com.example.weatherstyle.domain.like;

import com.example.weatherstyle.domain.post.Post;
import com.example.weatherstyle.domain.user.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.data.annotation.CreatedDate;

import java.sql.Timestamp;

@Entity
@Getter @Setter
@Table(name="post_user_like")
public class Like {
    @Id @GeneratedValue
    @Column(name = "like_id")
    private int id;

//    @Enumerated(EnumType.STRING)
//    private WeatherEmotion weatherEmotion;

    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "post_id")
    private Post post;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    private User user;

    @CreatedDate
    private Timestamp dateTime;


}
