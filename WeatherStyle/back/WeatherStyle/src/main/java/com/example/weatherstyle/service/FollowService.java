package com.example.weatherstyle.service;

import com.example.weatherstyle.entity.dto.follow.FollowDto;
import com.example.weatherstyle.entity.follow.FollowRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FollowService {
    private final FollowRepository followRepository;
    private final EntityManager em;

    public List<FollowDto> 팔로잉리스트(int loginUserId, int pageUserId){
        // 첫번째 물음표 loginUserId, 두번째 물음표 pageUserId
        StringBuilder sb = new StringBuilder();
        sb.append("select u.id,u.nickname,u.name,u.profileImage, ");
        sb.append("if(u.id = ?, true, false) equalUserState,");
        sb.append("if((select true from follow where fromUserId = ? and toUserId = u.id), true, false) as followState ");
        sb.append("from follow f inner join user u on f.toUserId = u.id ");
        sb.append("and f.fromUserId = ? ");
        sb.append("and u.id != ? ");
        String q = sb.toString();
        System.out.println("팔로잉리스트 : "+q);
        Query query = em.createNativeQuery(q, "FollowRespDtoMapping")
                .setParameter(1, loginUserId)
                .setParameter(2, loginUserId)
                .setParameter(3, pageUserId)
                .setParameter(4, pageUserId);
        List<FollowDto> followListEntity = query.getResultList();
        return followListEntity;
    }
    public boolean isFollowing(int loginUserId, int pageUserId) {
        return followRepository.existsByFromUserIdAndToUserId(loginUserId, pageUserId);
    }

    public List<FollowDto> 팔로워리스트(int loginUserId, int pageUserId){
        // 첫번째 물음표 loginUserId, 두번째 물음표 pageUserId
        StringBuilder sb = new StringBuilder();
        sb.append("select u.id,u.nickname,u.name,u.profileImage, ");
        sb.append("if(u.id = ?, true, false) equalUserState,");
        sb.append("if((select true from follow where fromUserId = ? and toUserId = u.id), true, false) as followState ");
        sb.append("from follow f inner join user u on f.fromUserId = u.id ");
        sb.append("and f.toUserId = ? ");
        sb.append("and u.id != ? ");
        String q = sb.toString();

        Query query = em.createNativeQuery(q, "FollowRespDtoMapping")
                .setParameter(1, loginUserId)
                .setParameter(2, loginUserId)
                .setParameter(3, pageUserId)
                .setParameter(4, pageUserId);
        List<FollowDto> followerListEntity = query.getResultList();
        return followerListEntity;
    }

    @Transactional
    public void 팔로우(int loginUserId, int pageUserId){
        int result = followRepository.mFollow(loginUserId, pageUserId);
        System.out.println("팔로우 result : "+result);
    }
    @Transactional
    public void 언팔로우(int loginUserId, int pageUserId){
        int result = followRepository.mUnFollow(loginUserId, pageUserId);
        System.out.println("result = " + result);

    }
}
