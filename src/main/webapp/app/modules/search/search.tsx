import React, { useState } from 'react';
import SearchBar from './searchBar/searchBar';
import SearchResult from './searchResult/searchResult';

const Search = () => {
  return (
    <div>
      <SearchBar />
      <SearchResult />
    </div>
  );
};

export default Search;
