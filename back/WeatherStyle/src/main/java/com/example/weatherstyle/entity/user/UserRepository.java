package com.example.weatherstyle.entity.user;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByNickname(String nickname);

    // 회원가입시 이메일, nickname 중복체크
    @Query(value = "select * from user where email = ?1 or nickname = ?2", nativeQuery = true)
    List<User> 중복체크(String email, String username);
}
