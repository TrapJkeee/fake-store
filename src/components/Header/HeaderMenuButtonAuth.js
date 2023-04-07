import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal-slice";
import LogInSVG from "../../assets/svg/LogInSVG";

import "./HeaderMenuButtonAuth.css";
import Modal from "../UI/Modal";

const MenuButtonAuth = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);

  const openModalHandler = () => {
    dispatch(modalActions.openModal());
  };

  return (
    <>
      {isModalOpen && <Modal />}
      <button className="header__button-auth" onClick={openModalHandler}>
        <span className="header__button-title">Войти</span>
        <LogInSVG />
      </button>
    </>
  );
};

export default MenuButtonAuth;
