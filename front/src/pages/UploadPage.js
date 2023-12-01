import styled from 'styled-components';
import SideBar from '../component/SideBar';
import Header from '../component/Header';
import ImgaeUpload from '../component/ImageUpload';
import JalnanGothic from '../fonts/JalnanGothic.ttf';

function UploadPage() {
  return (
    <MainContainer>
      <Container>
        <Header />
        <MainSection>
          <SideBar />
          <UserSection>
            <TitleDiv>
              <span>게시물 작성</span>
            </TitleDiv>
            <UserDiv>
              <UploadDiv>
                <UploadSec>
                  <TitlePost>
                    <input placeholder='제목을 입력하시오.'></input>
                  </TitlePost>
                  <ComemntPost>
                    <textarea
                      style={{ width: '300px', height: '250px' }}
                      placeholder='내용을 입력하시오.'
                    ></textarea>
                  </ComemntPost>
                </UploadSec>
                <UploadSec>
                  <ImgaeUpload></ImgaeUpload>
                </UploadSec>
              </UploadDiv>
              <OkBtn>
                <span>게시하기</span>
              </OkBtn>
            </UserDiv>
          </UserSection>
        </MainSection>
      </Container>
    </MainContainer>
  );
}

export default UploadPage;

const MainContainer = styled.div``;

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const MainSection = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
`;

const TitleDiv = styled.div`
  border: 1px solid black;
  width: 50%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-family: JalnanGothic;
    font-size: 55px;
    color: gray;
  }
`;

const UserSection = styled.div`
  background: lightgray;
  border: 1px solid black;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserDiv = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UploadDiv = styled.div`
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 5%;
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UploadSec = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitlePost = styled.div`
  border: 1px solid black;
  width: 80%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    width: 95%;
    height: 85%;
  }
`;

const ComemntPost = styled.div`
  border: 1px solid black;
  width: 80%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    width: 95%;
    height: 95%;
  }
`;

const OkBtn = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  display: block;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  overflow: hidden;
  position: relative;
  color: #ffffff;
  font-weight: 700;
  background-color: #lightgray;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  span {
    position: relative;
    z-index: 1;
  }
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 490%;
    width: 180%;
    background: #78c7d2;
    transition: all 0.5s ease-in-out;
    transform: translateX(-98%) translateY(-25%) rotate(45deg);
  }

  &:hover:after {
    transform: translateX(-9%) translateY(-25%) rotate(45deg);
  }
`;
