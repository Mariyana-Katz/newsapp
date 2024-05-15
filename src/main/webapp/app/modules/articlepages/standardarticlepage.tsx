import React, { useState } from 'react';
import LikeButton from '../articlecomponents/likeButton/likeButton';
import CommentBox from './commentBox';
import BookmarkIcon from '../bookmarkicon/bookmarkicon';

const ArticleModal = ({ article, onClose }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const formatText = text => {
    if (!text) return '';
    const sentences = text.split('. ');
    let formattedText = '';

    sentences.forEach((sentence, index) => {
      if (index > 0 && index % 5 === 0) {
        formattedText += '<br><br>';
      }
      if (index % 5 === 0) {
        formattedText += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
      }
      formattedText += sentence + '. ';
    });

    return formattedText;
  };

  const formatDate = dateString => {
    const date = new Date(dateString);
    const options = {
      year: 'numeric',
      month: 'String',
      day: 'numeric',
    };
    return date.toLocaleDateString('en-US');
  };

  const date = article ? formatDate(article.published) : '';

  const formattedArticle = article ? { ...article, content: formatText(article.content) } : null;

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  const displayedArticleText = formatText(article.content);

  return (
    <div className="article-modal-overlay" onClick={onClose}>
      <div className="article-modal" onClick={e => e.stopPropagation()}>
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
            <p className="author">{article.author}</p>
            <p className="published">{date}</p>
            <LikeButton article_ID={article.id} />
            <img src={article.urlToImage} alt="" className="modal-article-image" />
            <div className="modal-article-text" dangerouslySetInnerHTML={{ __html: displayedArticleText }} />
            <div className="comment-section-container">
              <CommentBox articleId={article.id} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleModal;
