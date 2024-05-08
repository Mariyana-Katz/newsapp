import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

interface BookmarkIconProps {
  isBookmarked: boolean;
  onClick: () => void;
}

const BookmarkIcon: React.FC<BookmarkIconProps> = ({ isBookmarked, onClick }) => {
  return <FontAwesomeIcon icon={faBookmark} className={`bookmark-icon ${isBookmarked ? 'bookmarked' : ''}`} onClick={onClick} />;
};

export default BookmarkIcon;
