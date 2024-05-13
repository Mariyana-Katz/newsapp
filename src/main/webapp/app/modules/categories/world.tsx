import React, { useEffect, useState } from 'react';
import ArticleModal from '../articlepages/standardarticlepage';
import FetchArticles from '../articleapi/fetcharticles';

const World = () => {
  const [articleData, setArticleData] = useState([]);
  const [selectedArticleIndex, setSelectedArticleIndex] = useState(null);
  const [firstHeadlineArticle, setFirstHeadlineArticle] = useState(null);

  useEffect(() => {
    FetchArticles()
      .then(data => {
        setArticleData(data);
        const firstHeadline = data.find(article => article.category === 'WORLD');
        setFirstHeadlineArticle(firstHeadline);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  const handleClick = index => {
    setSelectedArticleIndex(index);
  };

  const filteredArticleData = articleData.filter(article => article.category === 'WORLD');

  return (
    <div>
      <h2>World</h2>
      {firstHeadlineArticle && (
        <div className="headline-story" onClick={() => handleClick(0)}>
          <h2 className="headline-text">{firstHeadlineArticle.title}</h2>
          <img src={firstHeadlineArticle.urlToImage} className="headline-image"></img>
          <div className="headline-story-div">
            <p className="headline-story-text">{firstHeadlineArticle.shortDescription}</p>
          </div>
        </div>
      )}

      {filteredArticleData.map((article, index) =>
        index === 0 ? null : (
          <div key={index} className="article-box" onClick={() => handleClick(index)}>
            <p>World</p> {/* Include "World" before the headline */}
            <h3 className="article-headline">{article.title}</h3>
            <img src={article.urlToImage} alt="" className="article-image" />
            <p className="article-short-text">{article.shortDescription}</p>
          </div>
        ),
      )}
      {selectedArticleIndex !== null && (
        <ArticleModal article={filteredArticleData[selectedArticleIndex]} onClose={() => setSelectedArticleIndex(null)} />
      )}
    </div>
  );
};

export default World;
