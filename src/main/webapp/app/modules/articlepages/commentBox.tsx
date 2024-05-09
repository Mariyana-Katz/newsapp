import React, { useState } from 'react';
import './commentBox.scss';
import PostComments from './commentBoxApi';
import { useSelector } from 'react-redux';

interface CommentInterface {
  articleId: number;
}

const CommentBox: React.FC<CommentInterface> = ({ articleId }) => {
  const [comment, setComment] = useState('');
  const maxLength = 255;
  const userId = useSelector((state: any) => state.authentication.account.id);

  const postComment = async () => {
    if (comment.trim()) {
      try {
        await PostComments(articleId, userId, comment);
        console.log('Comment posted successfully');
        setComment('');
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

  const comments = [
    { id: 1, text: 'This is an example comment.' },
    { id: 2, text: 'Another example comment.' },
    { id: 3, text: 'yeeeeeeee will this even work.' },
  ];

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
            {comment.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentBox;
