import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px; // 원하는 높이로 설정
  background-color: black;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding-top: 60px; // Navbar 높이만큼 패딩 추가
`;

const BannerText = styled.div`
  font-size: 36px;
  font-weight: bold;
  text-shadow: 2px 2px 4px #000;
`;

const Banner = () => {
  return (
    <BannerContainer>
      <BannerText>환영합니다</BannerText>
    </BannerContainer>
  );
};

export default Banner;
