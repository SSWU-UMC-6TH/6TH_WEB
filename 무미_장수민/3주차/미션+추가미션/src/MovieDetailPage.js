// src/pages/MovieDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const MoviePoster = styled.img`
  width: 300px;
  height: auto;
  border-radius: 10px;
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
`;

const Title = styled.h2`
  margin: 0;
  color: #333;
`;

const Overview = styled.p`
  font-size: 18px;
  color: #666;
`;

const fetchMovieDetails = async (id) => {
  const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`);
  return data;
};

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then(setMovie);
  }, [id]);

  return (
    <Container>
      {movie && (
        <Header>
          <MoviePoster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <MovieInfo>
            <Title>{movie.title}</Title>
            <Overview>{movie.overview}</Overview>
          </MovieInfo>
        </Header>
      )}
    </Container>
  );
};

export default MovieDetailPage;
