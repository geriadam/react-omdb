import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import { Strings } from './constants'

import Search from './components/Search/Search';
import MovieList from './components/MovieList/MovieList';

class App extends Component {
  componentWillMount() {
    this.props.fetchMovies('cool');
  }

  render() {
    const { global } = Strings;
    return (
      <div>
        <Search />
        <MovieList movies={this.props.movies} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { movies: state.movies };
}

export default connect(mapStateToProps, actions)(App);
