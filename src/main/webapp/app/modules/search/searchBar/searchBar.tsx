import React, { useEffect, useState } from 'react';
import './searchBar.scss';
import FetchArticles from 'app/modules/articleapi/fetcharticles';

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState(''); //we use useState to figured out what the user input is
  const [articleData, setArticleData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);

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
    const dateElement = document.getElementById('select-date') as HTMLInputElement; //this constant is a pointer to the date dropdown
    const catElement = document.getElementById('select-cat') as HTMLInputElement; //this constant is a pointer to the category dropdown

    //reset the narrow dropdowns if the search field is empty
    if (value === '') {
      dateElement.value = 'all';
      catElement.value = '';
    }
    setInput(value);
    const valueLowerCase = value.toLowerCase();
    const results = articleData.filter(article => {
      return valueLowerCase && article && article.title && article.title.toLowerCase().includes(valueLowerCase);
    });
    setSearchedData(results);
    setResults(results);

    //additionally filter the results if the narrow filters are set to certain criterias
    handleDateAndCategoryChange(dateElement.value, catElement.value);
  };

  const handleDateAndCategoryChange = (dateValue: string, catValue: string) => {
    //filter only if there is something in the search textbox
    if (input) {
      //copy the initial results, filtered by the search textbox
      let filterResults = [...searchedData];

      if (dateValue !== 'all') {
        let date = new Date(new Date().setHours(0, 0, 0, 0));
        switch (dateValue) {
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
        //console.log(date);
        filterResults = filterResults.filter(article => {
          return article && article.published && new Date(article.published) >= date;
        });
      }

      //filter by category
      if (catValue) {
        const catUpperCase = catValue.toUpperCase();
        filterResults = filterResults.filter(article => {
          return article && article.category && article.category.toUpperCase() === catUpperCase;
        });
      }

      setResults(filterResults);
    }
  };

  return (
    <div className="content-header">
      <div className="search">
        <div className="search-controls">
          <label htmlFor="search-input">Search</label>
          <input
            id="search-input"
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
            className="search-box-input"
          />
          <button type="submit" title="Submit your search query." className="search-box-submit">
            <svg className="search-box-submit-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 40 40">
              <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path>
            </svg>
          </button>
        </div>
        <div className="search-refine">
          <div className="filter-label">
            <label>Narrow results:</label>
          </div>
          <div className="filter-date">
            {/* the document.getElementById() returns HTMLElement element and it needs to be casted to HTMLInputElement   */}
            <select
              id="select-date"
              className="search-date"
              onChange={e => handleDateAndCategoryChange(e.target.value, (document.getElementById('select-cat') as HTMLInputElement).value)}
            >
              <option value="all">All dates</option>
              <option value="today">Today</option>
              <option value="past 7 days">Past 7 Days</option>
              <option value="past 30 days">Past 30 Days</option>
              <option value="past 90 days">Past 90 Days</option>
              <option value="past year">Past Year</option>
            </select>
          </div>
          <div className="filter-category">
            <select
              id="select-cat"
              className="search-date"
              onChange={e =>
                handleDateAndCategoryChange((document.getElementById('select-date') as HTMLInputElement).value, e.target.value)
              }
            >
              <option value="">All Categories</option>
              <option value="World">World </option>
              <option value="National">National</option>
              <option value="Business">Business</option>
              <option value="Technology"> Technology</option>
              <option value="Science"> Science</option>
              <option value=" Culture"> Culture</option>
              <option value="Politics">Politics</option>
              <option value="Weather">Climate</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
