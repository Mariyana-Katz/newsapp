import { useAppSelector } from 'app/config/store';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostBookmarks from './bookmarkpostapi';

const BookMarkArticle = () => {
  const articleId = 4000;
  const userId = useSelector((state: any) => state.authentication.account.id);

  useEffect(() => {
    // Post bookmark when userId changes
    if (userId) {
      try {
        PostBookmarks(articleId, userId);
        console.log('Bookmark posted successfully');
      } catch (error) {
        console.error('Failed to post bookmark', error);
      }
    }
  }, [userId, articleId]);

  return <div className="bookmark-article-container"></div>;
};

export default BookMarkArticle;
