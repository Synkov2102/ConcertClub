import './Poster.scss';
import React from 'react';

const Poster = () => {

  return (
    <section className='poster'>
      <h2 className='poster__title'>Twenty One Pilots</h2>
      <p className='poster__subtitle'>22.02.23 в 21:00</p>
      <div className='poster__buttons-line'>
        <button className='poster__button-nav'>&#706;</button>
        <button className='poster__buy-button'>Купить билет</button>
        <button className='poster__button-nav'>&#707;</button>
      </div>
    </section>
  );
};

export default Poster;
