package com.example.weatherstyle.service;

import com.example.weatherstyle.entity.like.LikesRepository;
import com.example.weatherstyle.entity.post.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class LikesService {

    private final LikesRepository likesRepository;
    private final ImageRepository imageRepository;

    @Transactional
    public void 좋아요(int imageId, int loginId){
        likesRepository.mSave(imageId, loginId);
    }
    @Transactional
    public void 좋아요취소(int imageId, int loginUserId){
        likesRepository.mDelete(imageId, loginUserId);
    }
}
