package com.example.weatherstyle.service;

import com.example.weatherstyle.entity.user.User;
import com.example.weatherstyle.entity.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LoginService {
    private final UserRepository userRepository;

    public User login(String email, String password){

        Optional<User> findUserOptional = userRepository.findByEmail(email);
        User user=findUserOptional.get();
        if(user.getPassword().equals(password)){
            return user;
        }else{
            return null;
        }
//        return userRepository.findByEmail(loginId)
//                .filter(m->m.getPassword().equals(password))
//                .orElse(null);
    }
}
