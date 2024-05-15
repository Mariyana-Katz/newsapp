// StandardArticleBox.tsx
import React, { useEffect, useState } from 'react';
import FetchArticles from '../articleapi/fetcharticles';
import 'app/modules/articlecomponents/standardarticlebox.scss';
import LikeButton from './likeButton/likeButton';

const StandardArticleBox: React.FC = () => {
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
    <div className="article-container">
      {articleData.map(article =>
        article.category === 'HEADLINES' ? (
          <div key={article.id} className="article-box">
            <h3 className="article-headline">{article.title}</h3>

            <div className="article-card">
              <img src={article.urlToImage} alt="" className="article-image" />
              <div className="article-content">
                <p className="article-short-text">{article.shortDescription}</p>
              </div>
            </div>
          </div>
        ) : null,
      )}
    </div>
  );
};

export default StandardArticleBox;
