package com.example.weatherstyle.entity.comment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Integer> {

    @Query(value = "INSERT INTO comment(userId, imageId, text) VALUES(?1, ?2, ?3)", nativeQuery = true)
    int mSave(int userId, int imageId, String text);

}
