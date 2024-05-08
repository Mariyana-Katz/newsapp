import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import 'app/modules/bookmarkicon/bookmarkicon.scss'; // Import the CSS file for styles
import PostBookmarks from '../bookmarkpage/bookmarkpostapi';
import { useSelector } from 'react-redux';

interface BookmarkIconProps {
  isBookmarked: boolean;
  onClick: () => void;
  size?: string; // Add a size prop
}

const BookmarkIcon: React.FC<BookmarkIconProps> = ({ isBookmarked, onClick, size = '24px' }) => {
  const [clicked, setClicked] = useState(false);
  const [articleId, setArticleId] = useState(Number);
  const userId = useSelector((state: any) => state.authentication.account.id);

  const BookMarkArticle = async () => {
    try {
      await PostBookmarks(520, userId);
      console.log('Bookmark posted successfully');
    } catch (error) {
      console.error('Failed to post bookmark', error);
    }
  };

  const handleIconClick = () => {
    onClick();
    BookMarkArticle();
    setClicked(true);
    setTimeout(() => setClicked(false), 1000); // Reset the animation after 1 second
  };

  return (
    <FontAwesomeIcon
      icon={faBookmark}
      className={`bookmark-icon ${isBookmarked ? 'bookmarked' : ''} ${clicked ? 'animate' : ''}`}
      onClick={handleIconClick}
      style={{ fontSize: size }} // Set the font size dynamically
    />
  );
};
interface BookmarkIconProps {
  isBookmarked: boolean;
  onClick: () => void;
  size?: string; // Make the size prop optional
}

export default BookmarkIcon;
