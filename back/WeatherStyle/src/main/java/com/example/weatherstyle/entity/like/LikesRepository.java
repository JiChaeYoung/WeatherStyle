package com.example.weatherstyle.entity.like;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LikesRepository extends JpaRepository<Likes, Integer> {
    @Query(value = "INSERT INTO likes(imageId, userId) VALUES(?1, ?2)", nativeQuery = true)
    int mSave(int imageId, int loginUserId);

    @Query(value = "DELETE FROM likes WHERE imageId = ?1 AND userId = ?2", nativeQuery = true)
    int mDelete(int imageId, int loginUserId);
    Optional<Likes> findByImageIdAndUserId(int imageId, int userId);

    long countByImageId(int imageId);

}
