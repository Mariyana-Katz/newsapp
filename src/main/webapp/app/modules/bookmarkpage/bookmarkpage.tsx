import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import './bookmarkPage.scss'; // Import SCSS file
import { useSelector } from 'react-redux';
import FetchArticles from '../articleapi/fetcharticles';
import FetchBookmarks from './bookmarkapi';

const BookmarkPage = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const userId = useSelector((state: any) => state.authentication.account.id);
  const [articleData, setArticleData] = useState([]);
  const [userBookMarks, setUserBookmarks] = useState([]);
  const [userArticles, setUserArticles] = useState([]);

  useEffect(() => {
    FetchArticles()
      .then(data => {
        setArticleData(data);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  useEffect(() => {
    FetchBookmarks()
      .then(data => {
        setBookmarks(data);
      })
      .catch(error => {
        console.error('Error fetching articles', error);
      });
  }, []);

  bookmarks.map((bookmark, index) => {
    if (bookmark.userId == userId) {
      userBookMarks.push(bookmark.articleId);
    }
  });

  articleData.map((article, index) => {
    if (userBookMarks.includes(article.id)) {
      userArticles.push(article);
    }
  });

  console.log(userArticles);

  //find all bookmarked articles where userId = userId
  //filter articleData where aricleId = bookmarkedArticleId

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  const filteredArticleData = userArticles.filter(article => article.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="bookmark-page">
      <input type="text" placeholder="Search bookmarks..." value={searchQuery} onChange={handleSearchChange} />
      <div className="header">
        <h1>
          <FontAwesomeIcon icon={faBookmark} className="bookmark-icon" />
          Bookmark
        </h1>
      </div>
      <div className="business-container">
        {filteredArticleData.map((bookmark, index) => (
          <div className="article-box" key={index}>
            <div className="textbody">
              <p className="headline-text">{bookmark.title}</p>
              <p className="headline-story-text">{bookmark.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookmarkPage;
