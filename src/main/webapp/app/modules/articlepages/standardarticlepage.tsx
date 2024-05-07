import React, { useEffect, useState } from 'react';
import LikeButton from '../articlecomponents/likeButton/likeButton';

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
          <>
            <h3 className="article-headline">{article.title}</h3>
            <img src={article.urlToImage} alt="" className="article-image" />
            <p className="article-fulltext">{article.content}</p>
            <LikeButton />
          </>
        ) : (
          <p className="no-article">No Article Available</p>
        )}
      </div>
    </div>
  );
};

export default ArticlePage;
