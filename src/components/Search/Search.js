import React, { Component } from 'react';
import styles from './styles.module.css';

class Search extends Component {
    constructor(props) {
      super(props);
      this.state = { term: '' };
    }

    render() {
      return (
        <h5 className={styles.text}>Search</h5>
      );
    }
}

export default Search;
