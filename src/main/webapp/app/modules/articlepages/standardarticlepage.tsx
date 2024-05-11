import React, { useState } from 'react';
import LikeButton from '../articlecomponents/likeButton/likeButton';
import CommentBox from './commentBox';
import BookmarkIcon from '../bookmarkicon/bookmarkicon';

const ArticleModal = ({ article, onClose }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const formatText = text => {
    if (!text) return ''; // Return empty string if text is null or undefined
    const sentences = text.split('. '); // Split text into sentences
    let formattedText = '';
    sentences.forEach((sentence, index) => {
      if (index > 0 && index % 5 === 0) {
        // Add two line breaks after every 5th sentence
        formattedText += '\n\n';
      }
      // Add tab on the first sentence after each break
      if (index % 5 === 0) {
        formattedText += '\t';
      }
      // Add period and space for each sentence
      formattedText += sentence + '. ';
    });
    return formattedText;
  };

  const formattedArticle = article ? { ...article, content: formatText(article.content) } : null;

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  const displayedArticleText = formatText(article.content);
  console.log(displayedArticleText);

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
            <p className="modal-article-text">{formatText(displayedArticleText)}</p>
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
