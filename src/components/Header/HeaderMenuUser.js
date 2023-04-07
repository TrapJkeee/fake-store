import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import DawSVG from "../../assets/svg/DawSVG";
import "./HeaderMenuUser.css";
import { userActions } from "../../store/user-slice";
const HeaderMenuUser = () => {
  const [isClickToggle, setIsClickToggle] = useState(false);
  const email = useSelector((state) => state.user.email);

  const dispatch = useDispatch();
  const clickHandler = () => {
    setIsClickToggle(!isClickToggle);
  };

  const logoutHandler = () => {
    dispatch(userActions.removeUser());
  };

  const styles = isClickToggle
    ? "header__user-body header__user-body_box-shadow"
    : "header__user-body";
  return (
    <>
      <div className="header__user" onClick={clickHandler}>
        <ul className={styles}>
          <li className="header__user-name">{email}</li>
          <li className="header__user-icon">
            <DawSVG />
          </li>

          {isClickToggle && (
            <li className="header__user-submenu" onClick={logoutHandler}>
              Выйти
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default HeaderMenuUser;
