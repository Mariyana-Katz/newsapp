import React, { useState } from 'react';
import LikeButton from '../articlecomponents/likeButton/likeButton';
import CommentBox from './commentBox';
import BookmarkIcon from '../bookmarkicon/bookmarkicon';

const ArticleModal = ({ article, onClose }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        {article && (
          <div className="article-container">
            <div className="header">
              <div className="buttons">
                <BookmarkIcon isBookmarked={isBookmarked} onClick={handleBookmarkClick} articleId={article.id} />
              </div>
            </div>
            <h3 className="modal-article-title">{article.title}</h3>
            <LikeButton />
            <img src={article.urlToImage} alt="" className="modal-article-image" />
            <p className="modal-article-content">{article.content}</p>
            <CommentBox articleId={article.id} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleModal;
