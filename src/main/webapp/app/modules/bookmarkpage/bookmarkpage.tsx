import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import './bookmarkPage.scss'; // Import SCSS file

const BookmarkPage = () => {
  const initialBookmarks = [
    { title: 'Google', text: 'A multinational technology company specializing in Internet-related services and products.' },
    { title: 'GitHub', text: 'A web-based platform for version control using Git.' },
    { title: 'React', text: 'A JavaScript library for building user interfaces, developed by Facebook.' },
    { title: 'MDN Web Docs', text: 'A web platform for developers with documentation on web technologies.' },
    { title: 'Stack Overflow', text: 'A question and answer website for professional and enthusiast programmers.' },
  ];

  const [bookmarks, setBookmarks] = useState(initialBookmarks);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  const filteredBookmarks = bookmarks.filter(bookmark => bookmark.title.toLowerCase().includes(searchQuery.toLowerCase()));

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
        {filteredBookmarks.map((bookmark, index) => (
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
