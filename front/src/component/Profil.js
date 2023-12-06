import styled from 'styled-components';
import { GiShadowFollower } from 'react-icons/gi';
import { SlUserFollowing } from 'react-icons/sl';

function Profil() {
  return (
    <ProfilDiv>
      <ProfilImage>
        <ProfilImage2>ProfilImage2</ProfilImage2>
      </ProfilImage>
      <ProfilInfoDiv>
        <ProfilInfo>
          <SlUserFollowing />
          <p>following</p>
          <p>:</p>
          <p>123</p>
        </ProfilInfo>
        <FollowerDiv>
          <GiShadowFollower />
          <p>follower</p>
          <p>:</p>
          <p>123</p>
        </FollowerDiv>
      </ProfilInfoDiv>
    </ProfilDiv>
  );
}

export default Profil;

const ProfilDiv = styled.div`
  border: 1px solid lightgray;
  width: 100%;
  height: 30%;
  display: flex;
  background-color: #dcdcdc;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const ProfilImage = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfilImage2 = styled.div`
  background-color: white;
  border: 1px solid black;
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfilInfoDiv = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ProfilInfo = styled.div`
  width: 40%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    font-size: 30px;
  }
  p {
    font-size: 20px;

    margin: 2%;
  }

  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10%;
`;

const FollowerDiv = styled.div`
  width: 40%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  border-radius: 10%;

  & svg {
    font-size: 30px;
  }
  p {
    font-size: 20px;

    margin: 2%;
  }
`;
