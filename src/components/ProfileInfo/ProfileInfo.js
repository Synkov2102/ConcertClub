import './ProfileInfo.scss';
import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
const ProfileInfo = () => {
 
  const {id} = useParams();
  const profiles = useSelector(state => state.profiles.profiles);
  
  let currentProfile = profiles.find(profile => profile.id == id);

  if(currentProfile === undefined){
    currentProfile = {
      username: 'username',
      name: 'name',
      email: 'email@test.com',
      phone: '+7-000-00-000',
      website: 'website.com',
      company: {
        name: 'company',
        bs: 'shop'
      }
    }
  }

  return (
    <section className='profile'>
      <div className='profile__top-row'>
        <h2 className='profile__username'>{currentProfile.username}</h2>
      </div>
      <div className='profile__bottom-row'>
        <div className='profile__info-container'>
          <p className='profile__text-line'>{currentProfile.name}</p>
          <p className='profile__text-line'>{currentProfile.email}</p>
          <p className='profile__text-line'>{currentProfile.phone}</p>
          <p className='profile__text-line'>{currentProfile.website}</p>
          <p className='profile__text-line'>{currentProfile.company.name + ' ' +currentProfile.company.bs}</p>
        </div>
      </div>
    </section>
  );
};

export default ProfileInfo;
