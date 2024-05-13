import { useAppSelector } from 'app/config/store';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteBookmarks from './bookmarkdeleteapi';

// Define the component to delete bookmarked articles
const DelBookMarkArticle = () => {
  const articleId = 4000; // Hardcoded article ID for deletion
  const userId = useSelector((state: any) => state.authentication.account.id); // Get user ID from Redux store

  // Function to delete bookmarked article
  const DelBookMarkArticle = async () => {
    try {
      await DeleteBookmarks(articleId, userId); // Delete bookmark
      console.log('Bookmark deleted successfully');
    } catch (error) {
      console.error('Failed to delete bookmark', error);
    }
  };

  return <div className="bookmark-article-container"></div>; // Placeholder JSX, you might want to add content here
};

export default DelBookMarkArticle;
