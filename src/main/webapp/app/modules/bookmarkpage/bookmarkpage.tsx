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
          Bookmarks
        </h1>
      </div>
      <div className="business-container">
        {filteredArticleData.map((bookmark, index) => (
          <div key={index} className="article-box">
            <h3 className="article-headline">{bookmark.title}</h3>
            <img src={bookmark.urlToImage} alt="" className="article-image" />
            <p className="article-short-text">{bookmark.shortDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookmarkPage;
