import React, { useState, useEffect } from 'react';
import './commentBox.scss';
import PostComments from './commentBoxApi';
import GetComments from './commentBoxApi2';
import { useSelector } from 'react-redux';

interface CommentInterface {
  articleId: number;
}

const CommentBox: React.FC<CommentInterface> = ({ articleId }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const maxLength = 255;
  const userId = useSelector((state: any) => state.authentication.account.id);

  // Define fetchComments outside useEffect so it can be reused
  const fetchComments = async () => {
    try {
      const fetchedComments = await GetComments(articleId);
      console.log('Fetched Comments:', fetchedComments);
      setComments(fetchedComments); // Store fetched comments in state
    } catch (error) {
      console.error('Failed to fetch comments:', error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [articleId]);

  const postComment = async () => {
    if (comment.trim()) {
      try {
        await PostComments(articleId, userId, comment);
        console.log('Comment posted successfully');
        setComment('');
        await fetchComments(); // Refetch comments to update the list
      } catch (error) {
        console.error('Failed to post comment', error);
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postComment();
  };

  return (
    <div className="commentSection">
      <form onSubmit={handleSubmit} className="submit">
        <textarea
          value={comment}
          onChange={handleChange}
          maxLength={maxLength}
          placeholder="Write your comment"
          rows={3}
          className="commentBox"
        />
        <div className="commentLength">
          {comment.length} / {maxLength}
        </div>
        <button className="submitButton">Submit</button>
      </form>
      <div className="postedComments">
        {comments.map(comment => (
          <div key={comment.id} className="postedCommentTextBox">
            {comment.commentText}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentBox;
