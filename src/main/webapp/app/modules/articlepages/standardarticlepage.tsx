import React from 'react';
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
          Close
        </button>
        {article && (
          <div>
            <h3 className="modal-article-title">{article.title}</h3>
            <img src={article.urlToImage} alt="" className="modal-article-image" />
            <p className="modal-article-content">{article.content}</p>
            <BookmarkIcon isBookmarked={isBookmarked} onClick={handleBookmarkClick} articleId={article.id} />
            <CommentBox />
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleModal;
