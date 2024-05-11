import React, { useEffect, useState } from 'react';
import './likeButton.scss';
import './lButton';
import PostLikes from './likeButtonPostApi';
import FetchArticleLikes from './fetchArticleLikes';
import { useSelector } from 'react-redux';
import UpdateLikes from './updateLikes';

interface LikeInterface {
  article_ID: number;
}

const LikeButton: React.FC<LikeInterface> = ({ article_ID }) => {
  const [likeCount, setLikeCount] = useState<number>(0);
  //const [likeCount, setLikeCount] = useState(50);
  const [dislikeCount, setDisLikeCount] = useState(10);
  const [activeBtn, setActiveButton] = useState('none');
  const userId = useSelector((state: any) => state.authentication.account.id);
  const [likesData, setLikesData] = useState([]);

  useEffect(() => {
    FetchArticleLikes() //fetch the data from the API, update the component's state with the fetched data and logs errors if any during the fetching
      .then(data => {
        const likesForArticle = data.filter(likeRecord => {
          return likeRecord.articleId === article_ID;
        });
        setLikesData(likesForArticle);
        setLikeCount(likesForArticle.length > 0 ? likesForArticle[0].likeCount : 0);
        console.log(likesForArticle);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  // useEffect(() => {
  //   if(likesData.length > 0){
  //     UpdateLikes(likesData[0].id, likeCount)
  //       .then(data => {
  //         console.log(data);
  //         console.log('Article Like updated successfully');
  //       })
  //       .catch(error => {
  //         console.error('Fail to update likes:', error);
  //       });
  //     }
  //     else{
  //       PostLikes(article_ID, userId, likeCount)
  //       .then(data => {
  //         console.log(data);
  //         console.log('Article Like posted successfully');
  //       })
  //       .catch(error => {
  //         console.error('Fail to post likes:', error);
  //       });
  //       console.log('Article Like posted successfully');
  //     }
  //   }, [likeCount]);

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

  const postLikes = async () => {
    try {
      if (likesData.length > 0) {
        await UpdateLikes(likesData[0].id, likeCount);
        console.log('Article Like updated successfully');
      } else {
        await PostLikes(article_ID, userId, likeCount);
        console.log('Article Like posted successfully');
      }
    } catch (error) {
      console.error('Failed to post like', error);
    }
  };

  const handleSubmit = () => {
    handleReactionClick('like');
    postLikes();
    //console.log(article_ID);
  };

  return (
    <div>
      <div className="container">
        <div className="btn-container">
          {/* Button for liking */}
          <button className={`btn ${activeBtn === 'like' ? 'like-active' : ''}`} onClick={() => handleSubmit()}>
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
};

export default LikeButton;
