import React, { useEffect, useState } from 'react';
import FetchArticles from '../articleapi/fetcharticles';
import LikeButton from './likeButton/likeButton';

const StandardArticleBox = () => {
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

  console.log(articleData);

  return (
    <div>
      {articleData.map((article, index) =>
        article.category === 'HEADLINES' ? (
          <div key={index} className="article-box">
            <h3 className="article-headline">{article.title}</h3>
            <LikeButton />

            <img src={article.urlToImage} alt="" className="article-image" />
            <p className="article-short-text">{article.shortDescription}</p>
          </div>
        ) : null,
      )}
    </div>
  );
};

export default StandardArticleBox;
