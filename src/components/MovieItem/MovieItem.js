import React from 'react';
import styles from './styles.module.css';
import noImage from '../../assets/noImage.png';

const MovieItem = ({ movie, handleClick}) => {
  const poster = movie.Poster === 'N/A' ? noImage : movie.Poster;
  const imgAltText = movie.Poster === 'N/A' ? `Missing poster for ${movie.Title}` : `Poster for ${movie.Title}`;

  const onClickItem = () => {
    handleClick(movie.imdbID);
  }

  return (
    <div className="mx-auto col-sm-6 col-md-4 col-lg-4 mb-5">
      <div className={`card card-body bg-dark text-center h-100 ${styles.card}`} onClick={onClickItem}>
        <img className="w-100 mb-2" src={poster} alt={imgAltText} />
        <h5 className="text-light card-title">
          {movie.Title} - {movie.Year}
        </h5>
      </div>
    </div>
  )
}

export default MovieItem;
