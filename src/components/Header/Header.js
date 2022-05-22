import './Header.scss';
import React from 'react';
import { Link} from "react-router-dom";

const Objects = () => {

  return (
    <header className='header'>
      <Link className='header__home-button' to="/"><h1 className='header__title'>Concert Club</h1></Link>
      <div className='header__buttons-container'>
        <button className='header__version-button'>Версия для слабовидящих</button>
        <button className='header__profile-button'>Мой профиль</button>
      </div>
    </header>
  );
};

export default Objects;
