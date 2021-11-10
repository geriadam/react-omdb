import React from 'react';
import styles from './styles.module.css';
import noImage from '../../assets/noImage.png';

const MovieDetail = ({ isOpen, movie, isLoading, closeModal}) => {
  const renderBody = () => {
    return (
      <div className="row">
        <div className="col-12">
          <img
            className="w-100 mb-2"
            src={movie.Poster === 'N/A' ? noImage : movie.Poster}
            alt={movie.Poster === 'N/A' ? `Missing poster for ${movie.Title}` : `Poster for ${movie.Title}`}
          />
        </div>
        <div className="col-12">
          <div className={styles.field}>
            <div className={styles.label}>
              <p className={styles.labelP}>{movie.Title}</p>
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.label}>
              <p className={styles.labelP}>{movie.Plot}</p>
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.label}>
              Released: <p className={styles.labelP}>{movie.Released}</p>
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.label}>
              Runtime: <p className={styles.labelP}>{movie.Runtime}</p>
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.label}>
              Genre: <p className={styles.labelP}>{movie.Genre}</p>
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.label}>
              IMDB Rating: <p className={styles.labelP}>{movie.imdbRating}</p>
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.label}>
              Director(s): <p className={styles.labelP}>{movie.Director}</p>
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.label}>
              Writer(s): <p className={styles.labelP}>{movie.Writer}</p>
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.label}>
            Language(s): <p className={styles.labelP}>{movie.Language}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className={`modal ${styles.modal} ${isOpen ? styles.modalShow : ''}`}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">{isLoading || movie === null ? "Detail" : movie.Title}</h5>

            <button type="button" className="close" data-dismiss="modal" 
            aria-label="Close" onClick={closeModal}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {
              isLoading || movie === null
              ? <p className="text-center">Waiting</p>
              : renderBody()
            }
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data- 
             dismiss="modal" onClick={closeModal}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail;
