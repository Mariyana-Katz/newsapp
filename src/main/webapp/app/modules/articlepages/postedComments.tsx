import React from 'react';

const CommentList: React.FC = () => {
  const comments = [
    { id: 1, text: 'This is an example comment.' },
    { id: 2, text: 'Another example comment.' },
    { id: 3, text: 'yeeeeeeee will this even work.' },
  ];

  return (
    <div style={{ marginTop: '20px', width: '50%' }}>
      {comments.map(comment => (
        <div key={comment.id} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
          {comment.text}
        </div>
      ))}
    </div>
  );
};

export default CommentList;
