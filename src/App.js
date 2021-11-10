import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

import Search from './components/Search/Search';
import MovieList from './components/MovieList/MovieList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      movies: [],
      currentPage: 1,
      currentItemPage: 5,
      itemsPerPage: 5,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, false);
  }

  hasReachedBottom() {
    return (
      Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight
    );
  }

  resetState = () => {
    this.setState({
      text: '',
      movies: [],
      currentPage: 1,
      currentItemPage: 5,
      itemsPerPage: 5,
    })
  }

  loadData = async () => {
    if (this.state.currentItemPage % 10 === 0) {
      const page = this.state.currentPage + 1;
      await this.props.fetchMovies(this.state.text, page);
      if (this.props.movies !== undefined && this.props.movies.length > 0) {
        const data = [...this.state.movies, ...this.props.movies];
        this.setState({movies: data, currentPage: page, currentItemPage: data.length});
      }
    }
  }

  handleSearch = async (value) => {
    this.resetState();
    this.setState({ text: value });
    await this.props.fetchMovies(value);
    if (this.props.movies !== undefined && this.props.movies.length > 0) {
      setTimeout(() => {
        this.setState({movies: this.props.movies});
      }, 1000);
    }    
  }

  loadMoreItems = () => {
    if (this.props.loadingMovies) {
      return;
    }

    if (this.state.currentItemPage % 10 !== 0) {
      this.setState({ currentItemPage: this.state.currentItemPage += this.state.itemsPerPage});
    } else {
      this.loadData();
    }
  };

  handleScroll = () => {
    if (this.hasReachedBottom()) {
      this.loadMoreItems();
    }
  };

  render() {
    return (
      <div>
        <Search onSearch={this.handleSearch}/>
        {
          this.state.movies.length > 0 && <MovieList movies={this.state.movies} currentItemPage={this.state.currentItemPage} />
        }
        {
          !this.props.loadingMovies && this.state.movies.length > 5
          && <button className="btn btn-primary mx-auto d-block mb-5" onClick={this.loadMoreItems} >load data</button>
        }
        {
          this.props.loadingMovies && this.state.movies.length < this.props.totalResults && <p className="text-center">Wait</p>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    loadingMovies: state.movies.loading,
    totalResults: state.movies.totalResults
  };
}

export default connect(mapStateToProps, actions)(App);
