import FetchArticles from 'app/modules/articleapi/fetcharticles';
import React, { useEffect, useState } from 'react';
import { CardHeader } from 'reactstrap';
import ArticlePage from '../articlepages/standardarticlepage';
import { set } from 'lodash';

const Technology = () => {
  const [articleData, setArticleData] = useState([]);
  const [articleIndex, setArticleIndex] = useState(Number);

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

  const handleClick = (articleIndex: number) => {
    setArticleIndex(articleIndex);
    console.log(articleIndex);
  };

  return (
    <div>
      {articleData.map((article, index) =>
        article.category === 'TECHNOLOGY' ? (
          <div key={index} className="article-box" onClick={() => handleClick(index)}>
            <h3 className="article-headline">{article.title}</h3>
            <img src={article.urlToImage} alt="" className="article-image" />
            <p className="article-short-text">{article.shortDescription}</p>
          </div>
        ) : null,
      )}
      <div className="article-props">
        <ArticlePage articleData={articleData} articleIndex={articleIndex} />
      </div>
    </div>
  );
};

export default Technology;
