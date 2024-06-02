import React, { useState } from 'react';
import './MovieCard.css';

function MovieCard({ movie }) {
  const [hover, setHover] = useState(false);

  const toggleHover = () => setHover(!hover);

  return (
    <div className="movie-card" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      {hover && (
        <div className="movie-details">
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
          <div className="movie-rating">평점: {movie.vote_average}</div>
        </div>
      )}
    </div>
  );
}

export default MovieCard;
