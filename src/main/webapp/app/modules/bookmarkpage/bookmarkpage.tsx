import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import './bookmarkPage.scss'; // Import SCSS file

const BookmarkPage = () => {
  const initialBookmarks = [
    { title: 'Google', text: 'Search engine' },
    { title: 'GitHub', text: 'Code hosting platform' },
    { title: 'React', text: 'JavaScript library for building UIs' },
    { title: 'MDN Web Docs', text: 'Web development documentation' },
    { title: 'Stack Overflow', text: 'Question and answer site for programmers' },
  ];

  const [bookmarks, setBookmarks] = useState(initialBookmarks);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  const filteredBookmarks = bookmarks.filter(bookmark => bookmark.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="bookmark-page">
      <div className="header">
        <h1>
          Bookmarks &nbsp;
          <FontAwesomeIcon icon={faBookmark} className="bookmark-icon" />
        </h1>
      </div>
      <input type="text" placeholder="Search bookmarks..." value={searchQuery} onChange={handleSearchChange} />
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
