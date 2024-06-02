// src/components/MovieList.js
import React from 'react';
import MovieCard from './MovieCard';
import { movies } from './api'; // assuming movies.js exports an object named `movies`

function MovieList() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {movies.results.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
