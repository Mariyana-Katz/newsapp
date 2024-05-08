import React, { useEffect, useState } from 'react';
import FetchArticles from 'app/modules/articleapi/fetcharticles';
import StandardArticleBox from '../articlecomponents/standardarticlebox';

const Business = () => {
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    FetchArticles()
      .then(data => {
        setArticleData(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  return (
    <div>
      {articleData.map((article, index) =>
        article.category === 'BUSINESS' ? (
          <div key={index} className="article-box">
            <h3 className="article-headline">{article.title}</h3>
            <img src={article.urlToImage} alt="" className="article-image" />
            <p className="article-short-text">{article.shortDescription}</p>
          </div>
        ) : null,
      )}
      <StandardArticleBox />
    </div>
  );
};

export default Business;
