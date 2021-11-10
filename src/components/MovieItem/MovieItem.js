import React from 'react';
import styles from './styles.module.css';
import noImage from '../../assets/noImage.png';

const MovieItem = ({ id, year, title, type, posterUrl, handleClick}) => {
  const poster = posterUrl === 'N/A' ? noImage : posterUrl;
  const imgAltText = posterUrl === 'N/A' ? `Missing poster for ${title}` : `Poster for ${title}`;

  const onClickItem = () => {
    handleClick(id);
  }

  return (
    <div className="mx-auto col-sm-6 col-md-4 col-lg-4 mb-5">
      <div className={`card card-body bg-dark text-center h-100 ${styles.card}`} onClick={onClickItem}>
        <img className="w-100 mb-2" src={poster} alt={imgAltText} />
        <h5 className="text-light card-title">
          {title} - {year}
        </h5>
      </div>
    </div>
  )
}

export default MovieItem;
