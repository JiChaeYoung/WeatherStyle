package com.example.weatherstyle.entity.comment;

import com.example.weatherstyle.entity.dto.comment.CommentRespDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Integer> {

    @Modifying
    @Query(value = "INSERT INTO comment(userId, imageId, text) VALUES(?1, ?2, ?3)", nativeQuery = true)
    int mSave(int userId, int imageId, String text);


    List<Comment> findAllByImageId(int imageId);
    List<Comment> findByImageId(int imageId);


}
