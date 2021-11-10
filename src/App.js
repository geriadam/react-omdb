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

  loadData = () => {
    if (this.state.currentItemPage % 10 === 0) {
      this.setState({currentPage: Number(this.state.currentPage) + 1})
      this.props.fetchMovies(this.state.text, this.state.currentPage);
      const data = [...this.state.movies, ...this.props.movies];
      this.setState({movies: data});
    }
  }

  handleSearch = (value) => {
    this.setState(previousState => ({
      text: value,
    }), () => {
      this.props.fetchMovies(this.state.text);
    });
    setTimeout(() => {
      this.setState({movies: this.props.movies});
    }, 1000);
    
  }

  loadMoreItems = () => {
    if (this.props.loadingMovies) {
      return;
    }
    this.loadData();
    this.setState({ currentItemPage: this.state.currentItemPage += this.state.itemsPerPage});
  };

  onInfiniteScroll = () => {
    const wrappedElement = document.getElementById('container-app');
    if (wrappedElement.scrollHeight - wrappedElement.scrollTop === wrappedElement.clientHeight) {
      this.loadMoreItems();
      document.removeEventListener('scroll', this.onInfiniteScroll);
    }
    /*this.iScroll.addEventListener("scroll", () => {
      console.log("sas");
      if (
        this.iScroll.scrollTop + this.iScroll.clientHeight >=
        this.iScroll.scrollHeight - 20
      ) {
        this.loadMoreItems();
      }
    });*/
  };

  render() {
    console.log(this.state);
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
          this.props.loadingMovies && <p className="text-center">Wait</p>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    loadingMovies: state.movies.loading
  };
}

export default connect(mapStateToProps, actions)(App);
