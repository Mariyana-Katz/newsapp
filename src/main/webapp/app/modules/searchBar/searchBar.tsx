import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PageviewIcon from '@mui/icons-material/Pageview';

function SearchBar(/*{placeholder, data}*/) {
  return (
    <div className="searchInputs">
      <input type="text" className="input" />
      <div className="searchIcon">
        <SearchIcon />
      </div>
      <div className="PageviewIcon">
        <PageviewIcon />
      </div>
    </div>
  );
}

export default SearchBar;
