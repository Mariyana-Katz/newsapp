import { useAppSelector } from 'app/config/store';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteBookmarks from './bookmarkdeleteapi';

const DelBookMarkArticle = () => {
  const articleId = 4000;
  const userId = useSelector((state: any) => state.authentication.account.id);

  const DelBookMarkArticle = async () => {
    try {
      await DeleteBookmarks(articleId, userId);
      console.log('Bookmark deleted successfully');
    } catch (error) {
      console.error('Failed to delete bookmark', error);
    }
  };

  return <div className="bookmark-article-container"></div>;
};

export default DelBookMarkArticle;
