import React from "react";
import PropTypes from 'prop-types';

function SearchBar({ keyword, keywordChange }) {
  return (
    // controlled component dengan nilai diambil dari parent
    <input 
      className="search-bar"
      type="text"
      placeholder="Cari berdasarkan nama"
      value={keyword}
      // arrow function
      onChange={(event) => keywordChange(event.target.value)}
    />
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
}

export default SearchBar;