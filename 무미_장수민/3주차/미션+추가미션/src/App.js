import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components'; // styled-components import 추가
import Navbar from './Navbar';
import Footer from './Footer';
import MainPage from './MainPage';
import PopularPage from './PopularPage';
import NowPlayingPage from './NowPlayingPage';
import TopRatedPage from './TopRatedPage';
import UpComingPage from './UpComingPage';
import MovieDetailPage from './MovieDetailPage';
import { fetchPopularMovies } from './MovieApi';

const AppContainer = styled.div`
  background-color: #1c1c1c; // 어두운 배경 색상 설정
  color: white;
  min-height: 100vh; // 화면 전체 높이 설정
`;

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true); // 데이터 로딩 시작
      const popularMovies = await fetchPopularMovies();
      setMovies(popularMovies);
      setLoading(false); // 데이터 로딩 완료
    };

    fetchMovies();
  }, []);

  return (
    <AppContainer>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage movies={movies} loading={loading} />} /> {/* loading 상태 전달 */}
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/nowplaying" element={<NowPlayingPage />} />
          <Route path="/toprated" element={<TopRatedPage />} />
          <Route path="/upcoming" element={<UpComingPage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="/signup" element={<div>회원가입 페이지</div>} />
        </Routes>
        <Footer />
      </Router>
    </AppContainer>
  );
}

export default App;
