import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

function Comment() {
    const { imageId } = useParams();
    const [comments, setComments] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        fetchComments();
    }, [imageId]); // Add imageId to dependency array

    const fetchComments = async () => {
        try {
            const response = await axios.get(`/api/comments/${imageId}`);
            setComments(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    const addComment = async () => {
        try {
            if (!input) {
                console.error('Comment text cannot be empty');
                return;
            }

            const response = await axios.post(`/api/comment`, {
                content: input,
                imageId: parseInt(imageId),
            });

            console.log('Comment added:', response.data);
            setInput('');

            // Fetch comments again after adding a new comment
            fetchComments();
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    return (
        <PostDiv>
            <CommentDiv>
                <CommentSection comments={comments} />
                <CreateComment
                    input={input}
                    setInput={setInput}
                    addComment={addComment}
                />
            </CommentDiv>
        </PostDiv>
    );
}

const CommentSection = ({ comments }) => (
    <CommentDivStyled>
        {comments.map((comment, index) => (
            <p key={index}>
                <strong>User ID {comment.userNickname}</strong>: {comment.text}
            </p>
        ))}
    </CommentDivStyled>
);

const CreateComment = ({ input, setInput, addComment }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        addComment();
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

// Styled components remain the same...


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