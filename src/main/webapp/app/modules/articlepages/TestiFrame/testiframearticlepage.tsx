import React from 'react';

const TestArticlePage = ({ articleUrl, onClose }) => {
  return (
    <div className="articlepage">
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      {articleUrl && <iframe src={articleUrl} className="partial-screen-iframe" />}
    </div>
  );
};

export default TestArticlePage;
