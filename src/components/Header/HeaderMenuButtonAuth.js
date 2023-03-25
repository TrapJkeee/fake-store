import LogInSVG from "../../assets/svg/LogInSVG";
import "./HeaderMenuButtonAuth.css";
const MenuButtonAuth = () => {
  return (
    <div className="header__button-auth">
      <span className="header__button-title">Войти</span>
      <LogInSVG />
    </div>
  );
};

export default MenuButtonAuth;
