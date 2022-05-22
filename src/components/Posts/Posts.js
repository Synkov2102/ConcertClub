import './Posts.scss';
import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Post } from '../components';

const Posts = () => {
  const { id } = useParams();
  let posts = useSelector(state => state.posts.posts);

  if (posts.length > 3) {
    posts = [posts[0], posts[1], posts[2]]
  }

  return (
    <section className='posts'>
      <h2 className='posts__title'>Посты</h2>
      <div className='posts__list'>
        {posts.map((post) => {
          return (
            <Post post={post} wide={false} key={post.id}/>
          );
        })}

      </div>
      <Link to={`/profile/${id}/posts`} className='no-text-decoration'><button className='posts__list-button'>Посмотреть все посты</button></Link>
    </section>
  );
};

export default Posts;
