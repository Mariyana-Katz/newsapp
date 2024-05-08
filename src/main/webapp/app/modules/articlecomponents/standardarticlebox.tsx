// StandardArticleBox.tsx
import React, { useEffect, useState } from 'react';
import FetchArticles from '../articleapi/fetcharticles';
import BookmarkIcon from '../bookmarkicon/bookmarkicon'; // Import the BookmarkIcon component

const StandardArticleBox: React.FC = () => {
  const [articleData, setArticleData] = useState([]);
  const [isBookmarked, setIsBookmarked] = useState(false);

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

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div>
      {articleData.map((article, index) =>
        article.category === 'HEADLINES' ? (
          <div key={index} className="article-box">
            <h3 className="article-headline">{article.title}</h3>
            {/*the BookmarkIcon component */}
            <BookmarkIcon isBookmarked={isBookmarked} onClick={handleBookmarkClick} size="20px" />
            <img src={article.urlToImage} alt="" className="article-image" />
            <p className="article-short-text">{article.shortDescription}</p>
          </div>
        ) : null,
      )}
    </div>
  );
};

export default StandardArticleBox;
