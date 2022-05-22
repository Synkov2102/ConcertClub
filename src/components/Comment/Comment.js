import './Comment.scss';
import React from 'react';

const Post = ({comment}) => {

  return (
    <div className='comment'>
      <h4 className='comment__email'>{comment.email}</h4>
      <h3 className='comment__title'>{comment.name}</h3>
      <p className='comment__preview-text'>{comment.body}</p>
    </div>
  );
};

export default Post;
