import "./HeaderLogo.css";
import logo from "../../assets/logo.png";

const HeaderLogo = () => {
  return (
    <div className="header__logo ">
      <img src={logo} alt="logo" className="header__logo-img" />
      <div className="header__logo-title">Online shop</div>
    </div>
  );
};

export default HeaderLogo;
