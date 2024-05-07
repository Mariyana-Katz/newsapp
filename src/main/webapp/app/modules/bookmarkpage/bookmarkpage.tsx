import React, { useEffect, useState } from 'react';
import FetchArticles from '../articleapi/fetcharticles';

const BookmarkPage = () => {
  // Hardcoded initial bookmarks with text content
  const initialBookmarks = [
    { title: 'Google', text: 'Search engine' },
    { title: 'GitHub', text: 'Code hosting platform' },
    { title: 'React', text: 'JavaScript library for building UIs' },
    { title: 'MDN Web Docs', text: 'Web development documentation' },
    { title: 'Stack Overflow', text: 'Question and answer site for programmers' },
  ];

  // Define state to store bookmarks and search query
  const [bookmarks, setBookmarks] = useState(initialBookmarks);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search query change
  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  // Function to filter bookmarks based on search query
  const filteredBookmarks = bookmarks.filter(bookmark => bookmark.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div>
      <h1>Bookmark Page</h1>
      {/* Search bar */}
      <input type="text" placeholder="Search bookmarks..." value={searchQuery} onChange={handleSearchChange} />
      {/* Display filtered bookmarks */}
      <div>
        {filteredBookmarks.map((bookmark, index) => (
          <div key={index}>
            <p>{bookmark.title}</p>
            <p>{bookmark.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookmarkPage;
