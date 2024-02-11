package com.example.weatherstyle.web.argumentresolver;

import com.example.weatherstyle.SessionConst;
import com.example.weatherstyle.entity.dto.user.LoginUser;
import com.example.weatherstyle.entity.user.User;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.core.MethodParameter;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

public class LoginMemberArgumentResolver implements HandlerMethodArgumentResolver {
    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        boolean hasLoginAnnotation = parameter.hasParameterAnnotation(Login.class);
        boolean hasUserForm = LoginUser.class.isAssignableFrom(parameter.getParameterType());

        return hasLoginAnnotation && hasUserForm;
    }

    @Override
    public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer, NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws Exception {
        HttpServletRequest request = (HttpServletRequest) webRequest.getNativeRequest();
        HttpSession session = request.getSession(false);

        if (session == null) {
            return null;
        }

        // 세션에서 가져온 객체가 User 타입이라면 LoginUserDto로 변환
        Object sessionAttribute = session.getAttribute(SessionConst.LOGIN_MEMBER);
        if (sessionAttribute instanceof User) {
            User user = (User) sessionAttribute;
            return new LoginUser(user);
        }

        return sessionAttribute;
    }
}
