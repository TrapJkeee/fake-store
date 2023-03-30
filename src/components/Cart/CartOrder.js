import { useSelector } from "react-redux";
import "./CartOrder.css";

const CartOrder = () => {
  const items = useSelector((state) => state.cart.items);
  const itemsQuantity = useSelector((state) => state.cart.itemsQuantity);
  const totalPrice = items
    .map((item) => item.totalPrice)
    .reduce((sum, item) => sum + item);

  const sklonenie = (number, txt, cases = [2, 0, 1, 1, 1, 2]) =>
    txt[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  return (
    <section className="cart__order">
      <div className="cart__order-info">
        <span className="order__text">
          {`${itemsQuantity} ${sklonenie(itemsQuantity, [
            "Товар",
            "Товара",
            "Товаров",
          ])}`}
        </span>
        <span className="order__text">{totalPrice} $</span>
      </div>
      <div className="cart__order-total">
        <span className="cart__order-text">Итог</span>
        <span className="cart__order-text cart__order-text_strong">
          {totalPrice} $
        </span>
      </div>
      <button className="cart__order-button">Оформить заказ</button>
    </section>
  );
};

export default CartOrder;
