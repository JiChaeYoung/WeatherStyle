package com.example.weatherstyle.entity.follow;

import com.example.weatherstyle.entity.user.User;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;

@Entity
@Data
public class Follow {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fromUserId")
    private User fromUser;  //팔로우 관계를 요청하는 사용자

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "toUserId")
    private User toUser; //다른 사용자에 의해 팔로우 관계가 생성되는 사용자

    @CreationTimestamp
    private Timestamp creteDate;
}
