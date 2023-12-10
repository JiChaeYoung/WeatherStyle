package com.example.weatherstyle.entity.user;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByEmail(String email);

    // 회원가입시 이메일, nickname 중복체크
    @Query(value = "select * from users where email = ?1 or nickname = ?2", nativeQuery = true)
    List<User> 중복체크(String email, String nickname);

    @Query(value = "select u.*, (select true from follow where fromUserId = ?2 and toUserId = u.id) as matpal from follow f inner join user u on f.toUserId = u.id and f.fromUserId = ?1", nativeQuery = true)
    List<User> mFollowingUser(int pageUserId, int user_id);

    @Query(value = "select u.*,(select true from follow where fromUserId = ?2 and toUserId = u.id) as matpal from follow f inner join user u on f.fromUserId = u.id and f.toUserId = ?1", nativeQuery = true)
    List<User> mFollowerUser(int pageUserId, int user_id);

    @Query(value = "select * from users where id = ?1", nativeQuery = true)
    User mSelectedUser(int selectedUserId);

    @Query(value = "select * from users where nickname like ?1 and id != ?2", nativeQuery = true)
    List<User> mSearchUserList(String username, int id);
}
