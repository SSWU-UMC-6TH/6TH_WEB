import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import PopularPage from './components/PopularPage';
import NowPlayingPage from './components/NowPlayingPage';
import TopRatedPage from './components/TopRatedPage';
import UpComingPage from './components/UpComingPage';
import MovieDetailPage from './components/MovieDetailPage';
import NotFound from './components/NotFound';
import ErrorBoundary from './components/ErrorBoundary';
import { fetchPopularMovies } from './MovieApi';

const AppContainer = styled.div`
  background-color: #1c1c1c;
  color: white;
  min-height: 100vh;
`;

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const popularMovies = await fetchPopularMovies();
      setMovies(popularMovies);
      setLoading(false);
    };

    fetchMovies();
  }, []);

  return (
    <AppContainer>
      <Router>
        <Navbar />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<MainPage movies={movies} loading={loading} />} />
            <Route path="/popular" element={<PopularPage />} />
            <Route path="/nowplaying" element={<NowPlayingPage />} />
            <Route path="/toprated" element={<TopRatedPage />} />
            <Route path="/upcoming" element={<UpComingPage />} />
            <Route path="/movie/:title" element={<MovieDetailPage movies={movies} />} />
            <Route path="/signup" element={<div>회원가입 페이지</div>} />
            <Route path="*" element={<NotFound />} /> {/* NotFound 경로 추가 */}
          </Routes>
        </ErrorBoundary>
        <Footer />
      </Router>
    </AppContainer>
  );
}

export default App;
