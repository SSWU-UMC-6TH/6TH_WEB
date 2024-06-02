import React, { Component } from 'react';
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

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 에러 로깅 등 사이드 이펙트를 수행합니다.
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  handleGoHome = () => {
    this.setState({ hasError: false });
    this.props.navigate('/');
  };

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <h1>Oops!</h1>
          <p>예상치 못한 에러가 발생했습니다 ㅠㅁㅠ</p>
          <Button onClick={this.handleGoHome}>메인 페이지로 이동하기</Button>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default function ErrorBoundaryWithNavigate(props) {
  const navigate = useNavigate();
  return <ErrorBoundary {...props} navigate={navigate} />;
}
