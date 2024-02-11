package com.example.weatherstyle.entity.post;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImageRepository extends JpaRepository<Image, Integer> {
    List<Image> findByUserId(int userId);

    // 내가 팔로우 하지 않은 사람들의 이미지들(최대 20개)
    @Query(value = "select * from image where userID in (select id from user where id != ?1 and id not in (select toUserId from follow where fromUserId = ?1)) limit 20", nativeQuery = true)
    List<Image> mNonFollowImage(int loginUserId);

    // feed 화면에 띄울 게시물 검색
    @Query(value = "select * from image where userId = ?1 or userId in (select toUserId from follow where fromUserId = ?1) order by createDate desc", nativeQuery = true)
    List<Image> mFeeds(int loginUserId);

    // 팔로우한사람이 없으면 전체게시글을 모두 보여주기위한 쿼리
    @Query(value = "select * from image order by createDate desc", nativeQuery = true)
    List<Image> mAllFeeds(int loginUserId);

    // 단독 게시물 조회하는 부분
    @Query(value = "select * from image where id = ?1", nativeQuery = true)
    Image mBoardImage(int imageId);

    // 태그로 검색하는 부분
    @Query(value = "select * from image where id in (select IMAGE_ID from tag where name like CONCAT('%', ?1, '%'))", nativeQuery = true)
    List<Image> mFeedsTag(String tag);


    Image findByImageUrl(String imageUrl);
}
