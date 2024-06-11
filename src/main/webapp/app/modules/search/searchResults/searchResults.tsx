import React, { useState } from 'react';
import ArticleModal from 'app/modules/articlepages/standardarticlepage';

//that component is responsible for rendering the search results returned from the search .
const SearchResults = ({ results }) => {
  const [selectedArticleIndex, setSelectedArticleIndex] = useState(null);

  //handleClick function is updating the selectedArticleIndex state with the index of the clicked article.
  const handleClick = index => {
    setSelectedArticleIndex(index);
  };

  return (
    <div>
      {results && results.length > 0 ? (
        results.map((article, index) => (
          <div key={index} className="article-box" onClick={() => handleClick(index)}>
            <h3 className="article-headline">{article.title}</h3>
            <img src={article.urlToImage} alt="" className="article-image" />
            <p className="article-short-text">{article.shortDescription}</p>
          </div>
        ))
      ) : (
        <div>Please enter search criteria above.</div>
      )}
      {selectedArticleIndex !== null && (
        <ArticleModal article={results[selectedArticleIndex]} onClose={() => setSelectedArticleIndex(null)} />
      )}
    </div>
  );
};

export default SearchResults;
