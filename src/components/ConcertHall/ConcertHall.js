import './ConcertHall.scss';
import React from 'react';

const ConcertHall = () => {

  return (
    <section className='concert-hall'>
      <div className='concert-hall__info-container'>
        <h2 className='concert-hall__title'>О площадке</h2>
        <div className='concert-hall__text-block'>
          <div className='concert-hall__text-wrapper'>
            <p className='concert-hall__main-text'>Современная площадка для проведения концертов
              и других мероприятий любой сложности.</p>
            <p className='concert-hall__text'>Мы предоставляем всю необходимую для организаторов инфраструктуру и готовые
              решения под все основные задачи любого события, а также современное оборудование, соответствующее самым
              высоким мировым стандартам. </p>
            <p className='concert-hall__text'>Мы предоставляем всю необходимую для организаторов инфраструктуру и готовые
              решения под все основные задачи любого события, а также современное оборудование, соответствующее самым
              высоким мировым стандартам. </p>
          </div>
        </div>
      </div>
      <div className='request'>
        <h3 className='request__title'>Оставить заявку на проведение концерта</h3>
        <form>
          <textarea
            required
            type="text"
            placeholder='Расскажите о вашем предложении'
          />
          <button className="request__button">Отправить</button>
        </form>
      </div>

    </section>
  );
};

export default ConcertHall;
