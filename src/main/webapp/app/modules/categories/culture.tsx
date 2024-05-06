import FetchArticles from 'app/modules/articleapi/fetcharticles';
import React, { useEffect, useState } from 'react';
import ArticlePage from '../articlepages/standardarticlepage';
import { useNavigate } from 'react-router';
import AppRoutes from 'app/routes';

const Culture = () => {
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

  const handleClick = (index: number) => {
    setArticleIndex(index);
  };

  return (
    <div>
      {articleData.map((article, index) =>
        article.category === 'ARTSANDCULTURE' ? (
          <div key={index} className="article-box" onClick={() => handleClick(index)}>
            <div key={index} className="article-box">
              <h3 className="article-headline">{article.title}</h3>
              <img src={article.urlToImage} alt="" className="article-image" />
              <p className="article-short-text">{article.shortDescription}</p>
            </div>
          </div>
        ) : null,
      )}
      <ArticlePage articleData={articleData} articleIndex={articleIndex} />
    </div>
  );
};

export default Culture;
