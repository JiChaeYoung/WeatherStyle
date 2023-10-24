package com.example.weatherstyle.service;

import com.example.weatherstyle.domain.user.User;
import com.example.weatherstyle.domain.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor //생성자로 Autowired 주입
public class UserService {
    private final UserRepository userRepository;

    @Transactional
    public User 회원정보수정(int id, User user){
        User userEntity=userRepository.findById(id).get();
        userEntity.setName(user.getName());
        userEntity.setAboutMe(user.getAboutMe());

        return userEntity;
    }
}
