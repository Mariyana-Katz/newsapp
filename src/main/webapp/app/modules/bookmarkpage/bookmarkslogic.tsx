//Bookmarks
// Article ID
// User ID

// If current user id matches user id from Bookmarks table, get the article id for
//that row and put it in a temp variable in a variable
//then
// If article id matches article id from Articles Array, add article to new array.
// then
// map over articles in return statement and print them to the bookmarks page

// const [articleData, setArticleData] = useState([]);
// const [selectedArticleIndex, setSelectedArticleIndex] = useState(null);

// useEffect(() => {
//   FetchArticles()
//     .then(data => {
//       setArticleData(data);
//     })
//     .catch(error => {
//       console.error('Error fetching articles:', error);
//     });
// }, []);

// const handleClick = index => {
//   console.log('Article clicked:', index); // Check if the handleClick function is being invoked
//   setSelectedArticleIndex(index);
// };

import { useAppSelector } from 'app/config/store';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import FetchBookmarks from './bookmarkapi';
import PostBookmarks from './bookmarkpostapi';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const currentUser = useSelector((state: any) => state.authentication.account);
  const [bookmarkData, setBookmarkData] = useState([]);
  const articleId = 1200;
  const userId = useSelector((state: any) => state.authentication.account.id);

  useEffect(() => {
    FetchBookmarks()
      .then(data => {
        setBookmarkData(data);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  const BookMarkArticle = async () => {
    try {
      await PostBookmarks(articleId, userId);
      console.log('Bookmark posted successfully');
    } catch (error) {
      console.error('Failed to post bookmark', error);
    }

    return <div className="bookmark-article-container"></div>;
  };

  const handleClick = () => {
    console.log(currentUser);
    console.log(bookmarkData);
    BookMarkArticle();
  };

  return (
    <div>
      <button onClick={() => handleClick()}></button>
    </div>
  );
};

export default UserProfile;
