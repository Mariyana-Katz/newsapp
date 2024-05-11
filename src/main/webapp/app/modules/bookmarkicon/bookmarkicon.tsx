import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import 'app/modules/bookmarkicon/bookmarkicon.scss'; // Import the CSS file for styles
import { useSelector } from 'react-redux';
import PostBookmarks from '../bookmarkpage/bookmarkpostapi';

interface BookmarkIconProps {
  isBookmarked: boolean;
  onClick: () => void;
  size?: string; // Maåke the size prop optional
  articleId: number;
}

const BookmarkIcon: React.FC<BookmarkIconProps> = ({ isBookmarked, onClick, size = '24px', articleId }) => {
  const [clicked, setClicked] = useState(false);
  const userId = useSelector((state: any) => state.authentication.account.id);

  const toggleBookmark = async () => {
    try {
      if (isBookmarked) {
        // If already bookmarked, delete bookmark
        await deleteBookmark(articleId, userId);
        console.log('Bookmark deleted successfully');
      } else {
        // If not bookmarked, post bookmark
        await PostBookmarks(articleId, userId);
        console.log('Bookmark posted successfully');
      }
      // Toggle the bookmark state after successful operation
      onClick();
    } catch (error) {
      console.error('Failed to toggle bookmark', error);
    }
  };

  const handleIconClick = () => {
    toggleBookmark();
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

const postBookmark = async (articleID: number, userID: number) => {
  // Your postBookmark function implementation
};

const deleteBookmark = async (articleID: number, userID: number) => {
  // Your deleteBookmark function implementation
};

export default BookmarkIcon;
