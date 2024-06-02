// src/pages/TopRatedPage.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  margin-top: 80px;
`;

const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const MovieImage = styled.img`
  width: 100%;
  height: auto;
`;

const MovieTitle = styled.h3`
  color: #333;
  font-size: 16px;
`;

const fetchTopRatedMovies = async () => {
  const { data } = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}`);
  return data.results;
};

const TopRatedPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTopRatedMovies().then(setMovies);
  }, []);

  return (
    <MovieGrid>
      {movies.map(movie => (
        <MovieCard key={movie.id}>
          <MovieImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <MovieTitle>{movie.title}</MovieTitle>
        </MovieCard>
      ))}
    </MovieGrid>
  );
};

export default TopRatedPage;
