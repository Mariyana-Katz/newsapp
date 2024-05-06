import React from 'react';
import SearchResult from './searchResult';

const SearchResults = ({ results }) => {
  console.log(results);
  return (
    <div>
      {results.map((result, id) => {
        return <SearchResult result={result} key={id} />;
      })}
    </div>
  );
};

export default SearchResults;
