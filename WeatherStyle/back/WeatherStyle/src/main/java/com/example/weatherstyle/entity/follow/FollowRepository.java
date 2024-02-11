package com.example.weatherstyle.entity.follow;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FollowRepository extends JpaRepository<Follow, Integer> {
    //내가 팔로우 하고 있는사람 찾아오기
    List<Follow> findByFromUserId(int user_id);
    boolean existsByFromUserIdAndToUserId(int fromUserId, int toUserId);
    //나를 팔로우 하고 있는사람 수 반환
    @Query(value = "SELECT count(*) FROM follow WHERE toUserId = ?1", nativeQuery = true)
    int mCountByFollower(int toUserId);

    //내가 팔로우 하는 사람 수 반환
    @Query(value = "SELECT count(*) FROM follow WHERE fromUserId = ?1", nativeQuery = true)
    int mCountByFollowing(int fromUserId);

    //user_id가 pageUserId를 팔로우 하는지
    @Query(value = "SELECT count(*) FROM follow WHERE fromUserId = ?1 AND toUserId = ?2", nativeQuery = true)
    int mFollowState(int userId, int pageUserId);

    //팔로우하기
    @Modifying
    @Query(value = "INSERT INTO follow(fromUserId, toUserId) VALUES(?1, ?2)", nativeQuery = true)
    int mFollow(int userId, int pageUserId);

    //언팔로우
    @Modifying
    @Query(value = "DELETE FROM follow WHERE fromUserId = ?1 AND toUserId = ?2", nativeQuery = true)
    int mUnFollow(int userId, int pageUserId);

}
