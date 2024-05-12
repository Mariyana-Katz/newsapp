import React, { useState } from 'react';
import ArticleModal from 'app/modules/articlepages/standardarticlepage';

const SearchResults = ({ results }) => {
  const [selectedArticleIndex, setSelectedArticleIndex] = useState(null);

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
