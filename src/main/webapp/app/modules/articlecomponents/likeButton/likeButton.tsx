import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './likeButton.scss';
import './lButton';
import PostLikes from './likeButtonPostApi';
import FetchArticleLikes from './fetchArticleLikes';
import UpdateLikes from './updateLikes';

interface LikeInterface {
  article_ID: number;
}

const LikeButton: React.FC<LikeInterface> = ({ article_ID }) => {
  const [likeCount, setLikeCount] = useState<number>(0);
  const [activeBtn, setActiveButton] = useState('none');
  const [likesData, setLikesData] = useState([]);
  const userId = useSelector((state: any) => state.authentication.account.id);

  useEffect(() => {
    FetchArticleLikes() //fetch the data from the API, update the component's state with the fetched data and logs errors if any during the fetching
      .then(data => {
        const likesForArticle = data.filter(likeRecord => {
          return likeRecord.articleId === article_ID;
        });
        setLikesData(likesForArticle);
        if (likesForArticle.length > 0) {
          setLikeCount(likesForArticle[0].likeCount);
        }
        console.log(likesForArticle);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  // Handle the button click
  const handleReactionClick = reaction => {
    let newLikeCount;
    //if no button active, toggle the clicked button and update counts
    if (activeBtn === 'none') {
      if (reaction === 'like') {
        newLikeCount = likeCount + 1;
        setLikeCount(newLikeCount);
        setActiveButton('like');
      }
    }
    //if the same button clicked again, reset the state and update counts
    else if (activeBtn === reaction) {
      if (reaction === 'like') {
        newLikeCount = likeCount - 1;
        setLikeCount(newLikeCount);
      }
      setActiveButton('none');
    }

    postLikes(newLikeCount);
  };

  const postLikes = async (newLikeCount: number) => {
    try {
      if (likesData.length > 0) {
        await UpdateLikes(likesData[0].id, newLikeCount);
        console.log('Article Like updated successfully');
      } else {
        const response = await PostLikes(article_ID, userId, newLikeCount);
        setLikesData([response]);
        console.log('Article Like posted successfully');
      }
    } catch (error) {
      console.error('Failed to post like', error);
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
        </div>
      </div>
    </div>
  );
};

export default LikeButton;
