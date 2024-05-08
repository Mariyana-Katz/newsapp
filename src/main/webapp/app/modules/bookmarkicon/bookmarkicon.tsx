import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import 'app/modules/bookmarkicon/bookmarkicon.scss'; // Import the CSS file for styles

interface BookmarkIconProps {
  isBookmarked: boolean;
  onClick: () => void;
  size?: string; // Add a size prop
}

const BookmarkIcon: React.FC<BookmarkIconProps> = ({ isBookmarked, onClick, size = '24px' }) => {
  const [clicked, setClicked] = useState(false);

  const handleIconClick = () => {
    onClick();
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
