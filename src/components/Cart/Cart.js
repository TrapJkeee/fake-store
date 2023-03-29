import { useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [a, setA] = useState(0);
  const plusItemHandler = () => {
    setA(a + 1);
  };
  const minusItemHandler = () => {
    setA(a - 1);
  };

  return (
    <section className="cart">
      <div className="cart__item">
        <div className="cart__info">
          <img scr="" alt="img-product" className="cart__img" />

          <div className="cart__text">
            <span className="cart__title">Наушники</span>
            <div className="cart__subtitle">300 ₽</div>
          </div>
          <div className="cart__right">
            <button className="cart__button">
              <span className="cart__button_mark" onClick={minusItemHandler}>
                -
              </span>
              <span>{a}</span>
              <span className="cart__button_mark" onClick={plusItemHandler}>
                +
              </span>
            </button>
            <span className="cart__total">300&nbsp₽</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
