import React, { useState } from 'react';
import { Strings } from '../../constants';

const Search = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleChangeSearch = (event) => {
    setTerm(event.target.value);
  }

  const handleSubmitSearch = () => {
    onSearch(term);
  } 

  return (
    <div className="jumbotron jumbotron-fluid py-5 mb-3">
      <div className="container">
        <h1 className="display-4 mb-3 text-center">
          {Strings.global.title}
        </h1>
        <div className="search-bar input-group">
          <input
            value={term}
            className="form-control"
            placeholder={Strings.global.placeholderSearch}
            onChange={handleChangeSearch}
          />
          <span className="input-group-btn">
            <button
              className="btn btn-success"
              type="button"
              onClick={() => handleSubmitSearch()}
            >
              {Strings.global.buttonSearch}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Search;
