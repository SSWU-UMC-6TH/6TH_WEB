import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 50px;
  background-color: #1c1c1c;
  color: white;
  min-height: 100vh;
`;

const Poster = styled.img`
  width: 500px;
  height: auto;
  margin-right: 50px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Rating = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ReleaseDate = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  font-size: 16px;
`;

const MovieDetailPage = ({ movies }) => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const encodedTitle = encodeURIComponent(title);
        const movie = movies.find(m => encodeURIComponent(m.title) === encodedTitle);
        if (movie) {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
            params: {
              api_key: process.env.REACT_APP_TMDB_KEY,
            },
          });
          setMovie(response.data);
        } else {
          setMovie(null);
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
      setLoading(false);
    };

    fetchMovieDetails();
  }, [title, movies]);

  const renderStars = (rating) => {
    const stars = Math.floor(rating);
    return '⭐️'.repeat(stars);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <Container>
      <Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <Details>
        <Title>{movie.title}</Title>
        <Rating>평점 {renderStars(movie.vote_average)}</Rating>
        <ReleaseDate>개봉일 {movie.release_date}</ReleaseDate>
        <Overview>{movie.overview ? movie.overview : "줄거리가 없습니다."}</Overview>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </Details>
    </Container>
  );
};

export default MovieDetailPage;
