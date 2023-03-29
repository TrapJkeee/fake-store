import HeartSVG from "../../assets/svg/HeartSVG";
import OrdersSVG from "../../assets/svg/OrdersSVG";
import CartSVG from "../../assets/svg/CartSVG";
import "./HeaderMenu.css";
import { NavLink } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <ul className="header__menu-group">
      <NavLink
        to="/"
        className="header__menu-body header__menu-body_cursor-non"
      >
        <span className="header__menu-svg">
          <HeartSVG />
        </span>
        <span className="header__menu-title">Избранное</span>
      </NavLink>
      <NavLink
        to="/"
        className="header__menu-body header__menu-body_cursor-non"
      >
        <span className="header__menu-svg">
          <OrdersSVG />
        </span>

        <span className="header__menu-title">Заказы</span>
      </NavLink>
      <NavLink to="/cart" className="header__menu-body">
        <span className="header__menu-span">1</span>
        <span className="header__menu-svg">
          <CartSVG />
        </span>
        <span className="header__menu-title">Корзина</span>
      </NavLink>
    </ul>
  );
};

export default HeaderMenu;
