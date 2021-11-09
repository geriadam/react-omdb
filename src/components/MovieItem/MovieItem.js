import React from 'react';
import styles from './styles.module.css';

const MovieItem = ({ id, year, title, type, posterUrl}) => {
  return (
    <li className={styles.text}>{title}</li>
  )
}

export default MovieItem;
