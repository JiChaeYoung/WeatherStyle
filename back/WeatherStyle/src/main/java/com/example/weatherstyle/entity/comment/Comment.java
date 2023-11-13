package com.example.weatherstyle.entity.comment;

import com.example.weatherstyle.entity.post.Image;
import com.example.weatherstyle.entity.user.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.sql.Timestamp;

@Entity
@Getter @Setter
public class Comment {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String text;

    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name="imageId")
    private Image image;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="userId")
    private User user;

    @CreationTimestamp
    private Timestamp creteDate;

    private boolean commentHost;

}
