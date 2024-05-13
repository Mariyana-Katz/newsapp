import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import 'app/modules/bookmarkicon/bookmarkicon.scss'; // Import the CSS file for styles
import { useSelector } from 'react-redux';
import PostBookmarks from '../bookmarkpage/bookmarkpostapi'; // Importing the function for posting bookmarks

// Define the props interface for BookmarkIcon component
interface BookmarkIconProps {
  isBookmarked: boolean; // Indicates whether the article is bookmarked or not
  onClick: () => void; // Function to handle click event
  size?: string; // Make the size prop optional
  articleId: number; // Unique identifier for the article
}

// Define the BookmarkIcon component as a functional component
const BookmarkIcon: React.FC<BookmarkIconProps> = ({ isBookmarked, onClick, size = '24px', articleId }) => {
  const [clicked, setClicked] = useState(false); // State to manage clicked state for animation
  const userId = useSelector((state: any) => state.authentication.account.id); // Get user ID from Redux store

  // Function to toggle bookmark
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

  // Function to handle icon click event
  const handleIconClick = () => {
    toggleBookmark(); // Toggle bookmark
    setClicked(true); // Set clicked state for animation
    setTimeout(() => setClicked(false), 1000); // Reset the animation after 1 second
  };

  // Render the FontAwesomeIcon component for bookmark icon
  return (
    <FontAwesomeIcon
      icon={faBookmark} // Icon to display
      className={`bookmark-icon ${isBookmarked ? 'bookmarked' : ''} ${clicked ? 'animate' : ''}`} // CSS classes for styling
      onClick={handleIconClick} // Click event handler
      style={{ fontSize: size }} // Set the font size dynamically
    />
  );
};

// Function to post bookmark
const postBookmark = async (articleID: number, userID: number) => {
  PostBookmarks(articleID, userID);
};

// Function to delete bookmark
const deleteBookmark = async (articleID: number, userID: number) => {};

export default BookmarkIcon; // Export the BookmarkIcon component
