package com.example.weatherstyle.domain.user;


import com.example.weatherstyle.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByNickname(String nickname);
}
