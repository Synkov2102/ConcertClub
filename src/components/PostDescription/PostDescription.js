import './PostDescription.scss';
import React from 'react';

const Poster = ({title, text}) => {

  return (
    <section className='post-description'>
      <h2 className='post-description__title'>{title}</h2>
      <p className='post-description__text'>{text}</p>
    </section>
  );
};

export default Poster;
