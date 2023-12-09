import { useState } from 'react';
import './ImageUpload.css';
import React from 'react';
import axios from 'axios';

function ImageUpload({ onUpload }) {
  const [isActive, setActive] = useState(false);
  const [uploadedInfo, setUploadedInfo] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);

  const handleDragStart = () => setActive(true);
  const handleDragEnd = () => setActive(false);
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const setFileInfo = (file) => {
    const { name, size: byteSize, type } = file;
    const size = (byteSize / (1024 * 1024)).toFixed(2) + 'mb';
    const fileInfo = { name, size, type };

    setUploadedInfo(fileInfo);

    // const formData = new FormData();
    // formData.append('file', file);

    if (onUpload) {
      // onUpload 함수가 존재하는 경우에만 호출
      onUpload(file);
    }
  };

  const handleUpload = async ({ target }) => {
    const file = target.files[0];
    setFileInfo(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setActive(false);

    const file = event.dataTransfer.files[0];
    setFileInfo(file);
  };

  return (
    <label
      className={`preview${isActive ? ' active' : ''}`}
      onDragEnter={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragEnd}
      onDrop={handleDrop}
    >
      <input type='file' className='file' onChange={handleUpload} />
      {imageSrc && (
        <img src={imageSrc} alt='Uploaded Preview' className='uploaded-image' />
      )}
      {!uploadedInfo && !imageSrc && (
        <>
          <p className='preview_msg'>클릭 혹은 파일을 </p>
          <p className='preview_msg'>
            <span>이곳에 드롭</span>하세요.
          </p>
          <p className='preview_desc'>파일당 최대 3MB</p>
        </>
      )}
    </label>
  );
}

export default ImageUpload;
