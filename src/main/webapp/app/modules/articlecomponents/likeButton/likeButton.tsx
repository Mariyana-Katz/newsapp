import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './likeButton.scss';
import PostLikes from './likeButtonPostApi';
import FetchArticleLikes from './fetchArticleLikes';
import UpdateLikes from './updateLikes';

interface LikeInterface {
  //shows what props can be recieved
  article_ID: number;
}

const LikeButton: React.FC<LikeInterface> = ({ article_ID }) => {
  //functional component(likeButton) that recieved property (article_Id )
  const [likeCount, setLikeCount] = useState<number>(0); //use useState hook for saving the value between each call
  const [activeBtn, setActiveButton] = useState('none'); //saving the state of the active button
  const [likesData, setLikesData] = useState([]); //
  const userId = useSelector((state: any) => state.authentication.account.id); //to get the userID

  useEffect(() => {
    //use this hook to retrieve all the article's likes data
    FetchArticleLikes() //fetch the data from the API, update the component's state with the fetched data and logs errors if any during the fetching
      .then(data => {
        const likesForArticle = data.filter(likeRecord => {
          //filter all data to extract just the one for the article
          return likeRecord.articleId === article_ID;
        });
        setLikesData(likesForArticle); //save the data for the article(all the likes for the articles)
        if (likesForArticle.length > 0) {
          setLikeCount(likesForArticle[0].likeCount); //if there is a record for the article's likes , set the number of likes
        }
        console.log(likesForArticle);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  // Handle the button click
  const handleReactionClick = reaction => {
    let newLikeCount: number;
    //if no button active, toggle the clicked button and update counts
    if (activeBtn === 'none') {
      if (reaction === 'like') {
        newLikeCount = likeCount + 1;
        setLikeCount(newLikeCount);
        setActiveButton('like'); //set the active button  to like
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

    postLikes(newLikeCount); //call the postlikes function
  };

  //the function posts new like record for the article or patches existing one
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
            {/*ternary operator setting the like button */}
            <span className="material-icons">thumb_up</span>
            {/*when <span> element is rendered with the Material Icons font family applied, display the thumbs-up icon */}
            {likeCount}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LikeButton;
