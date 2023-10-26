package com.example.weatherstyle.entity.follow;

import com.example.weatherstyle.entity.user.User;
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;

@Entity
public class Follow {
    @Id @GeneratedValue
    @Column(name="follow_id")
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fromUserId")
    private User fromUser;  //팔로우를 하는 사람

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "toUserId")
    private User toUser; //팔로우를 당하는 사람

    @CreationTimestamp
    private Timestamp creteDate;
}
