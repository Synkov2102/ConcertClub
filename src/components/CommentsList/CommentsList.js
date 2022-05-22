import './CommentsList.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { Comment } from '../components';


const CommentsList = ({openPopup}) => {
  const comments = useSelector(state => state.posts.currentComments);

  return (
    <section className='comments-list'>
      <h2 className='comments-list__title'>Комментарии</h2>
      <div className='comments-list__list'>
        {comments.map((comment) => {
          return (
              <Comment comment={comment} key={comment.id}/>
          );
        })}

      </div>
      <button className='comments-list__add-button' onClick={openPopup}>Добавить Комментарии</button>
    </section>
  );
};

export default CommentsList;
