import React, { useState } from 'react';
import styled from 'styled-components';

function Comment() {
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <PostDiv>
      <CommentDiv>
        <CommentSection comments={comments} />
        <CreateComment addComment={addComment} />
      </CommentDiv>
    </PostDiv>
  );
}

const CommentSection = ({ comments }) => (
  <CommentDivStyled>
    {comments.map((comment, index) => (
      <p key={index}>{comment}</p>
    ))}
  </CommentDivStyled>
);

const CreateComment = ({ addComment }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addComment(input);
    setInput('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder='댓글을 입력하세요...'
      />
      <Button type='submit'>댓글 작성</Button>
    </Form>
  );
};

export default Comment;

const PostDiv = styled.div`
  background-color: white;
  border: 1px solid black;
  width: 60%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const CommentDiv = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow: auto;
`;

const CommentDivStyled = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  flex-grow: 1;
  overflow: auto;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  flex-grow: 1;
  border: 1px solid #ddd;
  padding: 5px;
  margin-right: 10px;
`;

const Button = styled.button`
  background-color: blue;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;
