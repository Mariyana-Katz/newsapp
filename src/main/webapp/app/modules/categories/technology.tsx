import FetchArticles from 'app/modules/articleapi/fetcharticles';
import React, { useEffect, useState } from 'react';
import { CardHeader } from 'reactstrap';
import ArticlePage from '../articlepages/standardarticlepage';
import { set } from 'lodash';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

const Technology = () => {
  const [articleData, setArticleData] = useState([]);
  const [articleIndex, setArticleIndex] = useState(Number);
  const navigate = useNavigate();

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

  const handleClick = (url: string | number | boolean) => {
    if (url) {
      navigate(`/article/${encodeURIComponent(url)}`);
    }
  };

  return (
    <div>
      {articleData.map((article, index) =>
        article.category === 'TECHNOLOGY' ? (
          <div key={index} className="article-box" onClick={() => handleClick(article.url)}>
            <h3 className="article-headline">{article.title}</h3>
            <img src={article.urlToImage} alt="" className="article-image" />
            <p className="article-short-text">{article.shortDescription}</p>
          </div>
        ) : null,
      )}
      <div className="article-props"></div>
    </div>
  );
};

export default Technology;
