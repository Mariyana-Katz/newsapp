import React from 'react';
import SearchResult from './searchResult';

const SearchResults = ({ results }) => {
  console.log(results);
  return (
    <div>
      {results && results.length > 0 ? (
        results.map((result, id) => {
          return <SearchResult result={result} key={id} />;
        })
      ) : (
        <div>Please enter search criterie above.</div>
      )}
    </div>
  );
};

export default SearchResults;
