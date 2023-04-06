import { createPortal } from "react-dom";
import CloseSVG from "../../assets/svg/CloseSVG";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal-slice";

import "./Modal.css";
import { useState } from "react";

const Backdrop = ({ onHideCartHandel }) => {
  return <div className="backdrob" onClick={onHideCartHandel}></div>;
};

const ModalWindow = ({ onHideCartHandel }) => {
  const [isClickOnRegistration, setIsClickOnRegistration] = useState(false);
  const [isRegistration, setIsRegistration] = useState(false);

  const modalEnter = (
    <>
      <div className="modal__title">Вход</div>
      <form action="" className="modal__data">
        <label for="email" className="modal__label">
          Почта
        </label>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="e-mail"
          className="modal__input"
        />
        <label for="password" className="modal__label">
          Пароль
        </label>

        <input
          id="password"
          type="password"
          name="password"
          placeholder="password"
          className="modal__input"
        />
        <button className="modal__button">Войти</button>
      </form>
      <button
        className="modal__registration"
        onClick={() => setIsClickOnRegistration(true)}
      >
        Регистрация
      </button>
    </>
  );

  const modalAuth = (
    <>
      <div className="modal__title">Регистрация</div>
      <form action="" className="modal__data">
        <label for="name" className="modal__label">
          Имя
        </label>
        <input
          id="text"
          type="text"
          name="name"
          placeholder="Name"
          className="modal__input"
        />
        <label for="email" className="modal__label">
          Почта
        </label>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="e-mail"
          className="modal__input"
        />
        <label for="password" className="modal__label">
          Пароль
        </label>

        <input
          id="password"
          type="password"
          name="password"
          placeholder="password"
          className="modal__input"
        />
        <button
          type="button"
          className="modal__button"
          onClick={() => setIsRegistration(true)}
        >
          Зарегистрироваться
        </button>
      </form>
    </>
  );

  const modalInfo = (
    <>
      <div className="modal__title">
        <p>Регистрация прошла успешно</p>
        <p> Войдите при помощи почты и пароля</p>
      </div>
    </>
  );

  return (
    <div className="modal">
      <div className="modal__body">
        {!isClickOnRegistration && modalEnter}

        {isClickOnRegistration && modalAuth}
        {isClickOnRegistration && isRegistration && modalInfo}
      </div>
      <div className="modal__close" onClick={onHideCartHandel}>
        <CloseSVG />
      </div>
    </div>
  );
};

const portal = document.getElementById("modal");

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const onHideCartHandel = () => {
    dispatch(modalActions.closeModal());
  };
  return (
    <>
      {createPortal(<Backdrop onHideCartHandel={onHideCartHandel} />, portal)}
      {createPortal(
        <ModalWindow onHideCartHandel={onHideCartHandel}>
          {children}
        </ModalWindow>,
        portal
      )}
    </>
  );
};

export default Modal;
