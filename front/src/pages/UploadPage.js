import styled from 'styled-components';
import SideBar from '../component/SideBar';
import Header from '../component/Header';
import ImgaeUpload from '../component/ImageUpload';
import React, { useState } from 'react';
import axios from 'axios';

function UploadPage() {
  const [uploadedInfo, setUploadedInfo] = useState(null);
  const [tags, setTags] = useState(''); // 태그를 저장할 상태

  const handleImageUpload = async () => {
    if (!uploadedInfo) {
      alert('업로드할 이미지를 선택해주세요.');
      return;
    }

    const formData = new FormData();

    formData.append('file', uploadedInfo);
    formData.append('tags', tags); // 태그를 formData에 추가
    formData.append('weatherDescription', 'asdfasdf');
    formData.append('address', 'qwerqwer');

    try {
      const response = await axios.post('/api/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert('이미지가 성공적으로 업로드되었습니다.');
      } else {
        alert('이미지 업로드에 실패하였습니다.');
      }
    } catch (error) {
      console.error('이미지 업로드에 실패하였습니다.', error);
    }
  };

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
                    <input
                      type='text'
                      placeholder='태그를 입력해주세요. (예: #사진, #여행)'
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                    />
                  </TitlePost>
                  <ComemntPost>
                    <textarea
                      style={{ width: '250px', height: '230px' }}
                      placeholder='내용을 입력하시오.'
                    ></textarea>
                  </ComemntPost>
                </UploadSec>
                <UploadSec>
                  <ImgaeUpload onUpload={setUploadedInfo} />
                </UploadSec>
              </UploadDiv>
              <OkBtn onClick={handleImageUpload}>
                <span>이미지 업로드</span>
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
