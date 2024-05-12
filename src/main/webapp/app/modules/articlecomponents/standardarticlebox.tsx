import React, { useEffect, useState } from 'react';
import FetchArticles from '../articleapi/fetcharticles';
import 'app/modules/articlecomponents/standardarticlebox.scss';

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
      {articleData.map((article, index) =>
        article.category === 'HEADLINES' ? (
          <div key={index} className="article-card">
            <img src={article.urlToImage} alt="" className="article-image" />
            <div className="article-content">
              <h3 className="article-headline">{article.title}</h3>
              <p className="article-short-text">{article.shortDescription}</p>
            </div>
            {/* Pop-up container */}
            <div className="article-details-popup">
              {/* Content of the pop-up */}
              {/* You can add more information or actions here */}
              <p>Additional information about the article</p>
            </div>
          </div>
        ) : null,
      )}
    </div>
  );
};

export default StandardArticleBox;
