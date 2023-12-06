// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';

// function Post() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // API 호출을 통해 데이터를 가져옵니다.
//     // 이 부분은 실제 API 엔드포인트와 맞춰 변경해야합니다.
//     axios.get('/api/posts')
//       .then(response => {
//         setPosts(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error!', error);
//       });
//   }, []);

//   return (
//     <Post1>
//       {posts.map((post, index) => (
//         <Posts key={index}>
//           <img src={post.image} alt="post" />
//         </Posts>
//       ))}
//     </Post1>
//   );
// }

// export default Post;

import styled from 'styled-components';

function Post() {
  return (
    <Post1>
      <Posts>Posts</Posts>
      <Posts>Posts</Posts>
      <Posts>Posts</Posts>
      <Posts>Posts</Posts>
      <Posts>Posts</Posts>
      <Posts>Posts</Posts>
    </Post1>
  );
}

export default Post;

const Post1 = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: Row;
`;

const Posts = styled.div`
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  border: 1px solid white;
  width: 180px;
  height: 180px;
  margin: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
