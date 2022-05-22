import './CommentPopup.scss';
import React from 'react';

import exitIconPath from '../../images/form_exit-button.svg';

function NewsPopup({ isOpen, onClose, onAddComment }) {
  const emailRef = React.useRef();
  const nameRef = React.useRef();
  const textRef = React.useRef();

  React.useEffect(() => {
    nameRef.current.value = '';
    emailRef.current.value = '';
    textRef.current.value = '';
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddComment(
      emailRef.current.value,
      nameRef.current.value,
      textRef.current.value
    );
    onClose();
  }

  return (
    <div className={`popup ${isOpen ? 'popup_open' : ''}`}>
      <div className="popup__container">
        <button type="button" className="popup__exit-button" onClick={onClose}>
          <img
            className="popup__exit-button-image"
            src={exitIconPath}
            alt='Изображение кнопки "выйти"'
          />
        </button>
        <form className="popup__form" onSubmit={handleSubmit}>
          <fieldset className="popup__text-inputs">
            <input
              id="email-input"
              required
              type="email"
              className="popup__input"
              placeholder="Почта"
              minLength="2"
              maxLength="30"
              ref={emailRef}
            />
            <input
              id="name-input"
              required
              type="text"
              className="popup__input"
              placeholder="Имя"
              ref={nameRef}
            />
            <input
              id="text-input"
              required
              type="text"
              className="popup__input"
              placeholder="Текст"
              ref={textRef}
            />
          </fieldset>
          <button className="popup__button popup__button-submit">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewsPopup;
