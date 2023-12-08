package com.example.weatherstyle.controller;


import com.example.weatherstyle.SessionConst;
import com.example.weatherstyle.entity.dto.user.LoginDto;
import com.example.weatherstyle.entity.user.User;
import com.example.weatherstyle.service.LoginService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Slf4j
public class LoginController {
    private final LoginService loginService;

    @PostMapping("/api/login")
    public ResponseEntity login(@Valid @RequestBody LoginDto form,
                                HttpServletRequest request) {
        User loginUser = loginService.login(form.getEmail(), form.getPassword());
        log.info("login? {}", loginUser);

        if (loginUser == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        HttpSession session = request.getSession();
        session.setAttribute(SessionConst.LOGIN_MEMBER, loginUser);
        return new ResponseEntity<>(HttpStatus.OK);

    }

    @PostMapping("/api/logout")
    public ResponseEntity logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }
        return new ResponseEntity<>(HttpStatus.OK);

    }
}
