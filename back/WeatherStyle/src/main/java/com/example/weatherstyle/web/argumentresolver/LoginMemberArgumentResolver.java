package com.example.weatherstyle.web.argumentresolver;

import com.example.weatherstyle.SessionConst;
import com.example.weatherstyle.entity.dto.user.LoginUserDto;
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
        boolean hasUserForm = LoginUserDto.class.isAssignableFrom(parameter.getParameterType());

        return hasLoginAnnotation&&hasUserForm;
    }

    @Override
    public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer, NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws Exception {
        HttpServletRequest request = (HttpServletRequest)webRequest.getNativeRequest();

        HttpSession session=request.getSession(false);

        if(session==null){
            return null;
        }
        return session.getAttribute(SessionConst.LOGIN_MEMBER);
    }
}
