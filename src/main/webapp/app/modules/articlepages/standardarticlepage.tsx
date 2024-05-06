import React, { useEffect, useState } from 'react';

const ArticlePage = ({ articleData, articleIndex }) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (articleData && articleData.length > 0 && articleIndex >= 0 && articleIndex < articleData.length) {
      setArticle(articleData[articleIndex]);
    } else {
      setArticle(null);
    }
  }, [articleData, articleIndex]);

  console.log(articleData);
  console.log(articleIndex);

  return (
    <div className="article-page">
      <div className="article-box">
        {article ? (
          <div>
            <h3 className="articlepage-headline">{article.title}</h3>
            <img src={article.urlToImage} alt="" className="articlepage-image" />
            <p className="articlepage-fulltext">{article.content}</p>
          </div>
        ) : (
          <p className="no-article">No Article Available</p>
        )}
      </div>
    </div>
  );
};

export default ArticlePage;
