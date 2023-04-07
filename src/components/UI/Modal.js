import { createPortal } from "react-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal-slice";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { userActions } from "../../store/user-slice";

import CloseSVG from "../../assets/svg/CloseSVG";
import "./Modal.css";

const Backdrop = ({ onHideCartHandel }) => {
  return <div className="backdrob" onClick={onHideCartHandel}></div>;
};

const ModalWindow = ({ onHideCartHandel }) => {
  const [isClickOnRegistration, setIsClickOnRegistration] = useState(false);
  const [isRegistration, setIsRegistration] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          userActions.setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        dispatch(modalActions.closeModal());
      })
      .catch(console.error);
  };

  const registerHandler = (e) => {
    e.preventDefault();

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {})
      .catch(console.error);

    setIsRegistration(true);
    setIsClickOnRegistration(false);
  };
  const modalEnter = (
    <>
      <div className="modal__title">Вход</div>
      <form className="modal__data" onSubmit={loginHandler}>
        <label for="email" className="modal__label">
          Почта
        </label>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="e-mail"
          className="modal__input"
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
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
      <form className="modal__data" onSubmit={registerHandler}>
        <label for="email" className="modal__label">
          Почта
        </label>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="e-mail"
          className="modal__input"
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          // type="button"
          className="modal__button"
          // onClick={() => setIsRegistration(true)}
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
        {!isClickOnRegistration && isRegistration && modalInfo}

        {isClickOnRegistration && modalAuth}
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
