import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1c1c1c;
  color: white;
  text-align: center;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #333;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const NotFound = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  };

  return (
    <Container>
      <h1>OOPS!!</h1>
      <p>예상치 못한 에러가 발생했습니다 ㅠㅁㅠ</p>
      <p>NOT FOUND</p>
      <Button onClick={goToHomePage}>메인 페이지로 이동하기</Button>
    </Container>
  );
};

export default NotFound;
