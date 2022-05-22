import './Buyers.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Buyers = () => {
  const profiles = useSelector(state => state.profiles.profiles);

  return (
    <section className='buyers'>
      <div className='buyers__info-container'>
        <h2 className='buyers__title'>Купили билеты</h2>
        <p className='buyers__counter'>{profiles.length}/<i>1000</i></p>
      </div>
      <div className='buyers__list'>
        {profiles.map((profile) => {
          return (
            <div className='buyer-card' key={profile.id}>
              <h3 className='buyer-card__title'>{profile.name}</h3>
              <p className='buyer-card__city'>{profile.city}</p>
              <Link to={`./profile/${profile.id}`}><button className='buyer-card__profile-button'>Смотреть Профиль</button></Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Buyers;
