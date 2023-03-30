import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import "./Cart.css";

const Cart = ({ id, title, price, totalPrice, img, quantity }) => {
  const items = useSelector((state) => state.cart.items);
  const currentItem = items.find((item) => item.id === id);

  const dispatch = useDispatch();

  const plusItemHandler = () => {
    dispatch(cartActions.addItem(currentItem));
  };
  const minusItemHandler = () => {
    dispatch(cartActions.removeItem(id));
  };

  return (
    <section className="cart">
      <div className="cart__item">
        <div className="cart__info">
          <img src={img} alt="img-product" className="cart__img" />
          <div className="cart__text">
            <span className="cart__title">{title}</span>
            <div className="cart__subtitle">{price.toFixed(2)}</div>
          </div>
          <div className="cart__right">
            <button className="cart__button">
              <span className="cart__button_mark" onClick={minusItemHandler}>
                -
              </span>
              <span>{quantity}</span>
              <span className="cart__button_mark" onClick={plusItemHandler}>
                +
              </span>
            </button>
            <span className="cart__total">{totalPrice.toFixed(2)} $</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
