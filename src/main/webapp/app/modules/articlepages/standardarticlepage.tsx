import React from 'react';
import LikeButton from '../articlecomponents/likeButton/likeButton';

const ArticleModal = ({ article, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
        {article && (
          <div>
            <h3 className="modal-article-title">{article.title}</h3>
            <img src={article.urlToImage} alt="" className="modal-article-image" />
            <p className="modal-article-content">{article.content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleModal;
