package com.example.weatherstyle.entity.follow;

import com.example.weatherstyle.entity.user.User;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Follow {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name="FROMUSERID")
    private User fromUser;

    @ManyToOne
    @JoinColumn(name="TOUSERID")
    private User toUser;

    @CreationTimestamp
    private Timestamp createDate;
}
