import HeartSVG from "../../assets/svg/HeartSVG";
import OrdersSVG from "../../assets/svg/OrdersSVG";
import CartSVG from "../../assets/svg/CartSVG";
import "./HeaderMenu.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderMenu = () => {
  const itemsQuantity = useSelector((state) => state.cart.itemsQuantity);

  return (
    <ul className="header__menu-group">
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
        <span className="header__menu-span">{itemsQuantity}</span>
        <span className="header__menu-svg">
          <CartSVG />
        </span>
        <span className="header__menu-title">Корзина</span>
      </NavLink>
    </ul>
  );
};

export default HeaderMenu;
