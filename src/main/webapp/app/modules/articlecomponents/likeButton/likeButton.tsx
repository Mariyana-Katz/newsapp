import React, { useState } from 'react';
import './likeButton.scss';
import './lButton';

function LikeButton() {
  const [likeCount, setLikeCount] = useState(50);
  const [dislikeCount, setDisLikeCount] = useState(10);
  const [activeBtn, setActiveButton] = useState('none');
  // Handle the button click
  const handleReactionClick = reaction => {
    //if no button active, toggle the cliked button and update counts
    if (activeBtn === 'none') {
      if (reaction === 'like') {
        setLikeCount(likeCount + 1);
        setActiveButton('like');
      } else if (reaction === 'disLike') {
        setDisLikeCount(dislikeCount + 1);
        setActiveButton('disLike');
      }
    }
    //if the same button clicked again, reset the state and update counts
    else if (activeBtn === reaction) {
      if (reaction === 'like') {
        setLikeCount(likeCount - 1);
      } else if (reaction === 'disLike') {
        setDisLikeCount(dislikeCount - 1);
      }
      setActiveButton('none');
    }
    //if different button clicked, toggle the active and update the count
    else if (activeBtn !== reaction) {
      if (reaction === 'like') {
        setLikeCount(likeCount + 1);
        setDisLikeCount(dislikeCount - 1);
        setActiveButton('like');
      } else if (reaction === 'disLike') {
        setDisLikeCount(dislikeCount + 1);
        setLikeCount(likeCount - 1);
        setActiveButton('disLike');
      }
    }
  };

  return (
    <div>
      <div className="container">
        <div className="btn-container">
          {/* Button for liking */}
          <button className={`btn ${activeBtn === 'like' ? 'like-active' : ''}`} onClick={() => handleReactionClick('like')}>
            <span className="material-icons">thumb_up</span>
            {likeCount}
          </button>
          {/* Button for Dislike */}
          <button className={`btn ${activeBtn === 'disLike' ? 'disLike-active' : ''}`} onClick={() => handleReactionClick('disLike')}>
            <span className="material-icons">thumb_down</span>
            {dislikeCount}
          </button>
        </div>
      </div>
    </div>
  );
}
export default LikeButton;

// function LikeButton() {
//   const [likes, setLikes] = useState(0);
//   const [liked, setLiked] = useState(false);
//   return (
//     <div className="like-button-container">
//     <button
//       className={`like-button ${liked ? 'liked' : ''}`}
//       onClick={() => {
//         setLikes(likes + 1);
//         setLiked(true);
//       }}
//     >
//       {likes} Likes
//     </button>
//     </div>
//   );
// }
// export default LikeButton;
