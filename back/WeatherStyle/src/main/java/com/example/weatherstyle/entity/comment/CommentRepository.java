package com.example.weatherstyle.entity.comment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CommentRepository extends JpaRepository {

    @Query(value = "INSERT INTO comment(userId, imageId, text) VALUES(?1, ?2, ?3)", nativeQuery = true)
    int mSave(int userId, int imageId, String text);

}
