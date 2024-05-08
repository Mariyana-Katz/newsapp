import React, { useState } from 'react';
import './commentBox.scss';

const CommentBox: React.FC = () => {
  const [comment, setComment] = useState('');
  const maxLength = 255;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Comment Submitted:', comment);
    setComment('');
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <form onSubmit={handleSubmit} style={{ position: 'relative', width: '100%' }}>
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
    </div>
  );
};

export default CommentBox;
