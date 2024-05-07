import React, { useEffect, useState } from 'react';
import ArticleModal from '../articlepages/standardarticlepage';
import FetchArticles from '../articleapi/fetcharticles';

const Culture = () => {
  const [articleData, setArticleData] = useState([]);
  const [selectedArticleIndex, setSelectedArticleIndex] = useState(null);

  useEffect(() => {
    FetchArticles()
      .then(data => {
        setArticleData(data);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  const handleClick = index => {
    console.log('Article clicked:', index); // Check if the handleClick function is being invoked
    setSelectedArticleIndex(index);
  };

  console.log('Selected Article Index:', selectedArticleIndex); // Check the selected article index

  return (
    <div>
      {articleData.map((article, index) =>
        article.category === 'ARTSANDCULTURE' ? (
          <div key={index} className="article-box" onClick={() => handleClick(index)}>
            <h3 className="article-headline">{article.title}</h3>
            <img src={article.urlToImage} alt="" className="article-image" />
            <p className="article-short-text">{article.shortDescription}</p>
          </div>
        ) : null,
      )}
      {selectedArticleIndex !== null && (
        <ArticleModal article={articleData[selectedArticleIndex]} onClose={() => setSelectedArticleIndex(null)} />
      )}
    </div>
  );
};

export default Culture;
