package com.example.weatherstyle.domain;

import jakarta.persistence.*;

@Entity
public class Follow {
    @Id @GeneratedValue
    @Column(name="follow_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "following")
    private User follower;

    @ManyToOne
    @JoinColumn(name = "follower")
    private User following;
}
