package com.example.weatherstyle.service;

import com.example.weatherstyle.entity.user.User;
import com.example.weatherstyle.entity.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginService {
    private final UserRepository userRepository;

    public User login(String loginId, String password){

//        Optional<Member> findMemberOptional = memberRepository.findByLoginId(loginId);
//        Member member=findMemberOptional.get();
//        if(member.getPassword().equals(password)){
//            return member;
//        }else{
//            return null;
//        }
        return userRepository.findByEmail(loginId)
                .filter(m->m.getPassword().equals(password))
                .orElse(null);
    }
}
