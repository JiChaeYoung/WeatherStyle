package com.example.weatherstyle.entity.user;

import com.example.weatherstyle.entity.post.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserPostRepository extends JpaRepository<Image, Integer> {

    @Query(value = "select * from post where userId = ?1", nativeQuery = true)//순수 쿼리문
    List<Image> userPost(int PostUserid); //유저의 게시물 조회
}
