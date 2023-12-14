package com.example.weatherstyle.entity.comment;

import com.example.weatherstyle.entity.post.Image;
import com.example.weatherstyle.entity.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.sql.Timestamp;

@Setter @Getter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Comment {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String text;

    private String userNickname;

    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name="IMAGEID")
    @JsonIgnore
    private Image image;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="USERID")
    @JsonIgnore
    private User user;

    @CreationTimestamp
    private Timestamp createDate;

    @Transient
    private boolean commentHost;

}
