import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderSighup from '../component/HeaderSingup';
import axios from 'axios'; // axios import
import { useNavigate } from 'react-router-dom';

const MainContainer = styled.div``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  margin-top: 50px;
  border: 1px solid gray;
  border-radius: 5px;

  padding: 50px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  padding: 10px;
  margin: 10px 0;
  border: none;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
`;

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    name: '',
    nickname: '',
    password: '',
    phoneNumber: '',
    birth: '',
    address: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (let key in form) {
      if (form[key] === '') {
        alert('모든 입력란을 채워주세요.');
        return;
      }
    }

    axios
      .post('/api/auth/joinForm', form)
      .then((response) => {
        console.log(response);
        navigate('/'); // 회원가입 후 메인 페이지로 이동
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <MainContainer>
      <HeaderSighup />
      <Form onSubmit={handleSubmit}>
        <Input
          type='email'
          name='email'
          placeholder='Email'
          onChange={handleChange}
        />
        <Input
          type='text'
          name='name'
          placeholder='Name'
          onChange={handleChange}
        />
        <Input
          type='text'
          name='nickname'
          placeholder='Nickname'
          onChange={handleChange}
        />
        <Input
          type='password'
          name='password'
          placeholder='Password'
          onChange={handleChange}
        />
        <Input
          type='tel'
          name='phoneNumber'
          placeholder='Phone Number'
          onChange={handleChange}
        />
        <Input type='date' name='birth' onChange={handleChange} />
        <Input
          type='text'
          name='address'
          placeholder='Address'
          onChange={handleChange}
        />
        <Button type='submit'>Submit</Button>
      </Form>
    </MainContainer>
  );
};

export default Signup;
