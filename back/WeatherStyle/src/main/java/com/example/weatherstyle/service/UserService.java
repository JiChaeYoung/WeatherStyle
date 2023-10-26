package com.example.weatherstyle.service;

import com.example.weatherstyle.entity.user.User;
import com.example.weatherstyle.entity.user.UserRepository;
import com.example.weatherstyle.exception.MyUserIdNotFoundException;
import com.example.weatherstyle.exception.MyUserInfoExistException;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.function.Supplier;

@Service
@RequiredArgsConstructor //생성자로 Autowired 주입
public class UserService {

    private final EntityManager em;
    private final UserRepository userRepository;

    @Transactional
    public User 회원수정(int id, User user){
        User userEntity=userRepository.findById(id).get();
        userEntity.setName(user.getName());
        userEntity.setAboutMe(user.getAboutMe());
        userEntity.setPhoneNumber(user.getPhoneNumber());

        return userEntity;
    }
    @Transactional(readOnly = true)
    public User 회원정보(User user) {
        return userRepository.findById(user.getId()).orElseThrow(new Supplier<MyUserIdNotFoundException>() {
            @Override
            public MyUserIdNotFoundException get() {
                return new MyUserIdNotFoundException();
            }
        });
    }
    
    public User 회원검색(String userNickName){
        return userRepository.findByNickname(userNickName);
    }
}
