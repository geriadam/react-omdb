import React from 'react';
import styles from './styles.module.css';
import MovieItem from '../MovieItem/MovieItem';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <MovieItem
          key={movie.imdbID}
          id={movie.imdbID}
          title={movie.Title}
          posterUrl={movie.Poster}
          year={movie.Year}
          type={movie.Type}
        />
      ))}
    </ul>
  )
}

export default MovieList;
