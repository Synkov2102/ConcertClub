import './Post.scss';
import React from 'react';

import { Link } from 'react-router-dom';

const Post = ({post, wide}) => {

  return (
    <Link to={`/post/${post.id}`} className={wide ? 'post post_size_wide' : 'post'}>
      <h3 className='post__title'>{post.title}</h3>
      <p className='post__preview-text'>{post.body}</p>
    </Link>
  );
};

export default Post;
