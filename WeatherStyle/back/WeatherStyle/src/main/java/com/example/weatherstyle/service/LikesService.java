package com.example.weatherstyle.service;

import com.example.weatherstyle.entity.like.Likes;
import com.example.weatherstyle.entity.like.LikesRepository;
import com.example.weatherstyle.entity.post.Image;
import com.example.weatherstyle.entity.post.ImageRepository;
import com.example.weatherstyle.entity.user.UserRepository;
import com.example.weatherstyle.exception.ImageNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LikesService {

    private final LikesRepository likesRepository;
    private final ImageRepository imageRepository;
    private final UserRepository userRepository;

    @Transactional
    public void 좋아요(int imageId, int userId) throws ImageNotFoundException {
        // 이미지 ID로 이미지를 찾아온다.
        Image image = imageRepository.findById(imageId)
                .orElseThrow(() -> new ImageNotFoundException("해당 이미지를 찾을 수 없습니다."));

        // 이미 좋아요를 눌렀는지 확인
        Optional<Likes> existingLike = likesRepository.findByImageIdAndUserId(imageId, userId);
        existingLike.ifPresentOrElse(
                like -> likesRepository.delete(like),
                () -> {
                    Likes newLike = new Likes();
                    newLike.setImage(image);
                    newLike.setUser(userRepository.getById(userId)); // userRepository 사용 예시
                    likesRepository.save(newLike);
                }
        );
    }
    @Transactional
    public void 좋아요취소(int imageId, int loginUserId){
        likesRepository.mDelete(imageId, loginUserId);
    }
    @Transactional(readOnly = true)
    public long 좋아요개수(int imageId) {
        return likesRepository.countByImageId(imageId);
    }
}
