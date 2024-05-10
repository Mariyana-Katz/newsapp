import React from 'react';

function Buttons({ handleLikeClick, handleDislikeClick }) {
  return (
    <div className="btn-container">
      <button className="btn" onClick={handleLikeClick}>
        Like
      </button>
      <button className="btn" onClick={handleDislikeClick}>
        Dislike
      </button>
    </div>
  );
}

export default Buttons;
