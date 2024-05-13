import React, { useState } from 'react';
import SearchBar from './searchBar/searchBar';
import SearchResults from './searchResults/searchResults';

const Search = () => {
  //results are taken from SearchBar component via setResults() and passed to SearchResults component
  const [results, setResults] = useState([]); //use the hook to store the results(searched results)
  return (
    <div>
      <SearchBar setResults={setResults} />
      <SearchResults results={results} />
    </div>
  );
};

export default Search;
