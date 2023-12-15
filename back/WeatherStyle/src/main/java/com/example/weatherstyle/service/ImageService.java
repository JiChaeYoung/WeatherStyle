package com.example.weatherstyle.service;

import com.example.weatherstyle.entity.dto.image.ImageDto;
import com.example.weatherstyle.entity.dto.image.ImageUpdateDto;
import com.example.weatherstyle.entity.dto.user.ImageUserRespDto;
import com.example.weatherstyle.entity.dto.user.UserProfileImageRespDto;
import com.example.weatherstyle.entity.comment.Comment;
import com.example.weatherstyle.entity.follow.Follow;
import com.example.weatherstyle.entity.follow.FollowRepository;
import com.example.weatherstyle.entity.like.Likes;
import com.example.weatherstyle.entity.post.Image;
import com.example.weatherstyle.entity.post.ImageRepository;
import com.example.weatherstyle.entity.tag.Tag;
import com.example.weatherstyle.entity.tag.TagRepository;
import com.example.weatherstyle.entity.tag.Utils;
import com.example.weatherstyle.entity.user.User;
import com.example.weatherstyle.entity.user.UserRepository;
import com.example.weatherstyle.exception.MyImageDeleteException;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class ImageService {
    private final ImageRepository imageRepository;
    private final UserRepository userRepository;
    private final FollowRepository followRepository;
    private final EntityManager em;
    private final TagRepository tagRepository;

    @Transactional
    public void 게시물삭제(int imageId, int imageUserId, int loginUserId)throws MyImageDeleteException {
        if(imageUserId!=loginUserId){
            throw new MyImageDeleteException("게시물 작성자만 글을 지울 수 있습니다.");
        }
        else{
            imageRepository.deleteById(imageId);
        }
    }

    @Value("${file.path}")
    private String uploadFolder;
    @Transactional
    public void 게시물업로드(int userId, ImageDto imageDto){
        User userEntity = userRepository.findById(userId).orElseThrow(null);

        UUID uuid = UUID.randomUUID();
        String imageFilename = uuid + "_" + imageDto.getFile().getOriginalFilename();
        Path imageFilepath = Paths.get(uploadFolder + imageFilename);
        try {
            Files.write(imageFilepath, imageDto.getFile().getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }

        // 1. Image 저장
        Image image = imageDto.toEntity(String.valueOf(imageFilepath), userEntity);
        Image imageEntity = imageRepository.save(image);

        // 2. Tag 저장
        List<String> tagNames = Utils.tagParse(imageDto.getTags());
        for (String name : tagNames) {
            Tag tag = Tag.builder().image(imageEntity).name(name).build();
            tagRepository.save(tag);
        }
    }

    @Transactional(readOnly = true)
    public Image 단독게시물(int imageId, int loginUserId) {
        Image boards = imageRepository.mBoardImage(imageId);

        boards.setLikeCount(boards.getLikes().size());

            // 좋아요 상태 여부 등록
            for (Likes like : boards.getLikes()) {
                if (like.getUser().getId() == loginUserId) {
                    boards.setLikeState(true);
                }
            }
            // 댓글 주인 여부 등록
            for (Comment comment : boards.getComments()) {
                if (comment.getUser().getId() == loginUserId) {
                    comment.setCommentHost(true);
                }
            }
        return boards;
    }

    @Transactional(readOnly = true)
    public List<Image> 피드사진(int loginUserId) {
        List<Image> images = imageRepository.mFeeds(loginUserId);
        if (images.size() == 0) {
            images = imageRepository.mAllFeeds(loginUserId);
        }

        for (Image image : images) {
            image.setLikeCount(image.getLikes().size());

            // 좋아요 상태 여부 등록
            for (Likes like : image.getLikes()) {
                if (like.getUser().getId() == loginUserId) {
                    image.setLikeState(true);
                }
            }
            // 댓글 주인 여부 등록
            for (Comment comment : image.getComments()) {
                if (comment.getUser().getId() == loginUserId) {
                    comment.setCommentHost(true);
                }
            }
        }

        return images;
    }
    @Transactional(readOnly = true)
    public List<Image> getImagesBySimilarTag(int loginUserId, String tag) {
        List<Image> images = null;
            tag="%"+tag+"%";
            images = imageRepository.mFeedsTag(tag);


        for (Image image : images) {
            image.setLikeCount(image.getLikes().size());

            // 좋아요 상태 여부 등록
            for (Likes like : image.getLikes()) {
                if (like.getUser().getId() == loginUserId) {
                    image.setLikeState(true);
                }
            }
            // 댓글 주인 여부 등록
            for (Comment comment : image.getComments()) {
                if (comment.getUser().getId() == loginUserId) {
                    comment.setCommentHost(true);
                }
            }
        }

        return images;
    }

    @Transactional(readOnly = true)
    public List<UserProfileImageRespDto> 인기사진(int loginUserId) {

        // 나말고 다른 유저들의 ImageRespDto 정보 받아오기
        StringBuilder sb = new StringBuilder();
        sb.append("select im.id, im.imageUrl, im.userId, ");
        sb.append("(select count(*) from likes lk where lk.imageId = im.id) as likeCount, ");
        sb.append("(select count(*) from comment ct where ct.imageId = im.id) as commentCount ");
        sb.append("from image im where im.userId != ? ");
        String q = sb.toString();
        Query query = em.createNativeQuery(q, "UserProfileImageRespDtoMapping").setParameter(1, loginUserId);
        List<UserProfileImageRespDto> imagesEntity = query.getResultList();

        // 내가 팔로우한 유저 정보 받아오기
        List<Follow> LoginUserFollowingList = followRepository.findByFromUserId(loginUserId);

        // 내가 팔로우 한 유저인지 아닌지 찾아서 해당 부분을 삭제함
        for (Follow list : LoginUserFollowingList) {
            for (int i = 0; i < imagesEntity.size(); i++) {
                if (imagesEntity.get(i).getUserId() == list.getToUser().getId()) {
                    imagesEntity.remove(i);
                }
            }
        }

        return imagesEntity;
        /* return imageRepository.mNonFollowImage(loginUserId); */
    }

    @Transactional
    public Image 게시물수정(int loginUserId, int imageId, int imageUserId, ImageUpdateDto imageUpdateDto) throws MyImageDeleteException {
        if (loginUserId != imageUserId) {
            throw new MyImageDeleteException("게시물 작성자만 수정 가능합니다.");
        } else {
            Image imageEntity = imageRepository.findById(imageId).orElseThrow(() -> new MyImageDeleteException("게시물을 찾을 수 없습니다."));
            imageEntity.setWeatherDescription(imageUpdateDto.getWeatherDescription());
            return imageEntity;
        }
    }
    public String getFullPath(String filename) {
        return uploadFolder+filename;
    }

    @Transactional(readOnly = true)
    public ImageUserRespDto getUserInfoByImageId(int imageId) {
        Image image = imageRepository.findById(imageId)
                .orElseThrow(() -> new MyImageDeleteException("게시물을 찾을 수 없습니다."));

        User user = image.getUser();
        ImageUserRespDto userInfo = new ImageUserRespDto();
        userInfo.setUserId(user.getId());
        userInfo.setImageUrl(user.getProfileImage());
        userInfo.setNickname(user.getNickname());
        userInfo.setAddress(user.getAddress());

        return userInfo;
    }

    public Image findId(String imageUrl) {
        Image byImageUrl = imageRepository.findByImageUrl(imageUrl);
        return byImageUrl;
    }
}