import './PostsList.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Post } from '../components';


const PostsList = () => {
  const { id } = useParams();

  const posts = useSelector(state => state.posts.posts);

  const profiles = useSelector(state => state.profiles.profiles);

  let currentProfile = profiles.find(profile => profile.id == id);

  if (currentProfile == undefined) {
    currentProfile = {
      username: 'username'
    }
  }

  return (
    <section className='posts-list'>
      <h2 className='posts-list__title'>{`Все посты пользователя: ${currentProfile.username}`}</h2>
      <div className='posts-list__list'>
        {posts.map((post) => {
          return (
              <Post post={post} wide={true} key={post.id}/>
          );
        })}

      </div>
    </section>
  );
};

export default PostsList;
