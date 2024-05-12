import React, { useEffect, useState } from 'react';
import './searchBar.scss';
import FetchArticles from 'app/modules/articleapi/fetcharticles';

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState(''); //we use useState to figured out what the user input is
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    FetchArticles() //fetch the data from the API, update the component's state with the fetched data and logs errors if any during the fetching
      .then(data => {
        setArticleData(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  //console.log(articleData);
  const handleChange = value => {
    setInput(value);
    const valueLowerCase = value.toLowerCase();
    const results = articleData.filter(article => {
      return valueLowerCase && article && article.title && article.title.toLowerCase().includes(valueLowerCase);
    });
    setResults(results);
  };

  //This is for handling the day dropmenu
  const handleDateChange = value => {
    console.log(value);
    if (value === 'all') {
      setResults(articleData);
    } else {
      let date = new Date(new Date().setHours(0, 0, 0, 0));
      switch (value) {
        case 'today':
          //date.setDate(date.getDate());
          break;
        case 'past 7 days':
          date.setDate(date.getDate() - 7);
          break;
        case 'past 30 days':
          date.setDate(date.getDate() - 30);
          break;
        case 'past 90 days':
          date.setDate(date.getDate() - 90);
          break;
        case 'past year':
          date.setFullYear(date.getFullYear() - 1);
          break;
      }
      console.log(date);
      const results = articleData.filter(article => {
        return article && article.published && new Date(article.published) >= date;
      });
      setResults(results);
    }
  };
  //this is for handling the categories dropmenu narrowing search
  const handleCatChange = value => {
    console.log(value);
    if (value) {
      const valueUpperCase = value.toUpperCase();
      const results = articleData.filter(article => {
        return article && article.category && article.category.toUpperCase() === valueUpperCase;
      });
      setResults(results);
    } else {
      setResults(articleData);
    }
  };

  return (
    <div className="contentheader">
      <div className="search">
        <div className="search-controls">
          <label htmlFor="searchlayout-searchinput">Search</label>
          <input
            type="search"
            placeholder="Type to search…"
            value={input} //the value should be the value that user input
            onChange={e => handleChange(e.target.value)} //if the value is changed we take the new value
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            required
            maxLength={512}
            className="ais-SearchBox-input"
          />
          <button type="submit" title="Submit your search query." className="ais-SearchBox-submit">
            <svg className="ais-SearchBox-submitIcon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 40 40">
              <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path>
            </svg>
          </button>
        </div>
        <div className="searchRefine">
          <div className="filterLabel">
            <label>Narrow results:</label>
          </div>
          <div className="filterDate">
            <select className="searchdd" onChange={e => handleDateChange(e.target.value)}>
              <option value="all">All dates</option>
              <option value="today">Today</option>
              <option value="past 7 days">Past 7 Days</option>
              <option value="past 30 days">Past 30 Days</option>
              <option value="past 90 days">Past 90 Days</option>
              <option value="past year">Past Year</option>
            </select>
          </div>
          <div className="filterProg">
            <select className="searchdd" onChange={e => handleCatChange(e.target.value)}>
              <option value="">All Categories</option>
              <option value="All Things Considered">All Things Considered</option>
              <option value="World">World </option>
              <option value="National">National</option>
              <option value="Business">Business</option>
              <option value="Technology"> Technology</option>
              <option value="Science"> Science</option>
              <option value="Art & Culture">Art & Culture</option>
              <option value="Politics">Politics</option>
              <option value="Climate">Climate</option>
              <option value="Food">Food</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
