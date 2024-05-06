import React, { useState } from 'react';
import SearchBar from './searchBar/searchBar';
import SearchResults from './searchResults/searchResults';

const Search = () => {
  const [results, setResults] = useState([]);
  return (
    <div>
      <SearchBar setResults={setResults} />
      <SearchResults results={results} />
    </div>
  );
};

export default Search;
