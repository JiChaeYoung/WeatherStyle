package com.example.weatherstyle.service;

import com.example.weatherstyle.SessionConst;
import com.example.weatherstyle.entity.dto.user.*;
import com.example.weatherstyle.entity.comment.Comment;
import com.example.weatherstyle.entity.follow.FollowRepository;
import com.example.weatherstyle.entity.like.Likes;
import com.example.weatherstyle.entity.post.Image;
import com.example.weatherstyle.entity.user.User;
import com.example.weatherstyle.entity.user.UserPostRepository;
import com.example.weatherstyle.entity.user.UserRepository;
import com.example.weatherstyle.exception.MyUserIdNotFoundException;
import com.example.weatherstyle.exception.MyUserInfoExistException;
import com.example.weatherstyle.web.argumentresolver.Login;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;
import java.util.function.Supplier;

@Service
@RequiredArgsConstructor //생성자로 Autowired 주입
public class UserService {

    private final HttpSession session;
    private final EntityManager em;
    private final UserRepository userRepository;
    private final FollowRepository followRepository;
    private final UserPostRepository userPostRepository;

    @Transactional
    public void 회원가입(JoinReqDto joinReqDto) throws MyUserInfoExistException {
        System.out.println("서비스 회원가입 들어옴");
        System.out.println(joinReqDto);

        // 이메일, 이름은 중복체크가 필요하다.
        List<User> DuplicateCheckList = userRepository.중복체크(joinReqDto.getEmail(), joinReqDto.getNickname());
        System.out.println(DuplicateCheckList.size());
        if (!(DuplicateCheckList.isEmpty())) {
            System.out.println("중복 이메일 또는 아이디가 있습니다.");
            throw new MyUserInfoExistException("이미 존재하는 Email 또는 사용자 이름 입니다.");
        } else {
            userRepository.save(joinReqDto.toEntity());
        }
    }
    @Transactional
    public void 회원수정(UserUpdateForm user, int loginUserId) {
        // 더티 체킹
        User userEntity = userRepository.findById(loginUserId)
                .orElseThrow(() -> new MyUserIdNotFoundException());

        // UserUpdateForm에서 null이 아닌 필드만 엔티티에 설정
        if (user.getNickname() != null) {
            userEntity.setNickname(user.getNickname());
        }
        if (user.getAboutMe() != null) {
            userEntity.setAboutMe(user.getAboutMe());
        }
        if (user.getPhoneNumber() != null) {
            userEntity.setPhoneNumber(user.getPhoneNumber());
        }
        if (user.getAddress() != null) {
            userEntity.setAddress(user.getAddress());
        }

        // 다른 필드들은 변경하지 않음
    }

    @Transactional(readOnly = true)
    public User 회원정보(LoginUser user) {
        return userRepository.findById(user.getId()).orElseThrow(new Supplier<MyUserIdNotFoundException>() {
            @Override
            public MyUserIdNotFoundException get() {
                return new MyUserIdNotFoundException();
            }
        });
    }

//    @Transactional(readOnly = true)
//    public User 특정회원(int selectedUserId) {
//        return userRepository.mSelectedUser(selectedUserId);
//    }

    @Transactional(readOnly = true)
    public UserProfileDto 회원프로필(int id,LoginUser loginUser) {

        int imageCount;
        int followerCount;
        int followingCount;
        String aboutMe;
        boolean followState;

        User userEntity = userRepository.findById(id).orElseThrow(new Supplier<MyUserIdNotFoundException>() {
            @Override
            public MyUserIdNotFoundException get() {
                return new MyUserIdNotFoundException();
            }
        });

        // 1. 이미지들과 전체 이미지 카운트(dto받기)
        StringBuilder sb = new StringBuilder();
        sb.append("select im.id, im.IMAGE_URL, im.userId,");
        sb.append("(select count(*) from likes lk where lk.imageId = im.id) as likeCount, ");
        sb.append("(select count(*) from comment ct where ct.imageId = im.id) as commentCount ");
        sb.append("from image im where im.userId = ? order by createDate desc");
        String q = sb.toString();
        Query query = em.createNativeQuery(q, "UserProfileImageRespDtoMapping").setParameter(1, id);
        List<UserProfileImageRespDto> imageEntity = query.getResultList();

        imageCount = imageEntity.size();

        // 2. 팔로우 수
        followerCount = followRepository.mCountByFollower(id);
        followingCount = followRepository.mCountByFollowing(id);

        // 3. 팔로우 유무
        followState = followRepository.mFollowState(loginUser.getId(), id) == 1 ? true : false;

        // 4. 최종마무리
        UserProfileDto userProfileDto = UserProfileDto.builder().pageHost(id == loginUser.getId())
                .followState(followState).followerCount(followerCount).followingCount(followingCount).aboutMe(userEntity.getAboutMe())
                .imageCount(imageCount).user(userEntity).images(imageEntity) // 수정완료(Dto만듬) (댓글수, 좋아요수)
                .build();

        return userProfileDto;
    }
    @Transactional
    public List<Image> 특정유저게시물(int PostUserid, int loginUserId) {
        List<Image> boards = null;
        boards = userPostRepository.userPost(PostUserid);
        for (Image board : boards) {
            board.setLikeCount(board.getLikes().size());

            // 좋아요 상태 여부 등록
            for (Likes likes : board.getLikes()) {
                if (likes.getUser().getId() == loginUserId) {
                    board.setLikeState(true);
                }
            }
            // 댓글 주인 여부 등록
            for (Comment comment : board.getComments()) {
                if (comment.getUser().getId() == loginUserId) {
                    comment.setCommentHost(true);
                }
            }
        }
        return boards;
    }
    @Value("${file.path}")
    private String uploadFolder;

    @Transactional
    public void 프로필사진업로드(LoginUser loginUser, MultipartFile file) {
        UUID uuid = UUID.randomUUID();
        String imageFilename = uuid + "_" + file.getOriginalFilename();
        Path imageFilepath = Paths.get(uploadFolder + imageFilename);
        try {
            Files.write(imageFilepath, file.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }

        User userEntity = userRepository.findById(loginUser.getId())
                .orElseThrow(new Supplier<MyUserIdNotFoundException>() {
                    @Override
                    public MyUserIdNotFoundException get() {
                        return new MyUserIdNotFoundException();
                    }
                });

        // 더티체킹
        userEntity.setProfileImage(imageFilename);

        // 자신의 프로필 이미지 변경 후에 세션에 변경된 이미지가 적용되도록 다시 등록해주기
        loginUser.setImageUrl(imageFilename);
        session.setAttribute(SessionConst.LOGIN_MEMBER, loginUser);
    }

    @Transactional(readOnly = true)
    public List<User> 회원검색(String nickName, int id) {
        nickName = "%" + nickName + "%";
        if(userRepository.mSearchUserList(nickName, id)==null){
            return null;
        }
        else {
            return userRepository.mSearchUserList(nickName,id);
        }
    }

    @Transactional(readOnly = true)
    public UserProfileDto 내정보(int id) {
        int imageCount;
        int followerCount;
        int followingCount;
        String aboutMe;

        User userEntity = userRepository.findById(id)
                .orElseThrow(() -> new MyUserIdNotFoundException());

        // 1. 이미지들과 전체 이미지 카운트(dto받기)
        StringBuilder sb = new StringBuilder();
        sb.append("select im.id, im.IMAGE_URL, im.userId,");
        sb.append("(select count(*) from likes lk where lk.imageId = im.id) as likeCount, ");
        sb.append("(select count(*) from comment ct where ct.imageId = im.id) as commentCount ");
        sb.append("from image im where im.userId = ? order by createDate desc");
        String q = sb.toString();
        Query query = em.createNativeQuery(q, "UserProfileImageRespDtoMapping").setParameter(1,id);
        List<UserProfileImageRespDto> imageEntity = query.getResultList();

        imageCount = imageEntity.size();

        // 2. 팔로우 수
        followerCount = followRepository.mCountByFollower(id);
        followingCount = followRepository.mCountByFollowing(id);

        return UserProfileDto.builder()
                .pageHost(true)
                .followerCount(followerCount)
                .followingCount(followingCount)
                .imageCount(imageCount)
                .aboutMe(userEntity.getAboutMe())
                .user(userEntity)
                .images(imageEntity)
                .build();
    }
}