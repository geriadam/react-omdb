import React, { useState } from 'react';
import axios from 'axios';
import { Config } from '../../constants';
import MovieItem from '../MovieItem/MovieItem';
import MovieDetail from '../MovieDetail/MovieDetail';

const MovieList = ({ movies, currentItemPage}) => {
  const [movie, setMovie] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLoadingDetail, setIsLoadingDetail] = useState(false);

  const detailMovie = async (id) => {
    setIsLoadingDetail(true);
    const response = await axios.get(`${Config.url}/?apikey=${Config.apiKey}&i=${id}`);
    if (response?.status === 200) {
      setMovie(response.data);
    }
    setIsLoadingDetail(false);
  };

  const openModal = (id) => {
    setIsOpenModal(true);
    detailMovie(id);
  }

  const closeModal = () => {
    setIsOpenModal(false);
    setMovie(null);
  }
  return (
    <div className="container" id="container-app">
      <div className="row">
        {movies.slice(0, currentItemPage).map((movie, i) => (
          <MovieItem
            key={i}
            movie={movie}
            handleClick={openModal}
          />
        ))}
      </div>
      <MovieDetail isOpen={isOpenModal} movie={movie} isLoading={isLoadingDetail} closeModal={closeModal} />
    </div>
  )
}

export default MovieList;
