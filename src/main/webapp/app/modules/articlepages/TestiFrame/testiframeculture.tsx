import FetchArticles from 'app/modules/articleapi/fetcharticles';
import React, { useEffect, useState } from 'react';
import TestArticlePage from 'src/main/webapp/app/modules/articlepages/TestiFrame/testiframearticlepage';

const TestCulture = () => {
  const [articleData, setArticleData] = useState([]);
  const [selectedArticleUrl, setSelectedArticleUrl] = useState(null);

  useEffect(() => {
    FetchArticles()
      .then(data => {
        setArticleData(data);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  const handleClick = (index: number) => {
    setSelectedArticleUrl(articleData[index].url);
  };

  const handleClose = () => {
    setSelectedArticleUrl(null); // Set selectedArticleUrl back to null to close the iframe
  };

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
      {selectedArticleUrl && <TestArticlePage articleUrl={selectedArticleUrl} onClose={handleClose} />}
    </div>
  );
};

export default TestCulture;
