import "./CartOrder.css";

const CartOrder = () => {
  return (
    <section className="cart__order">
      <div className="cart__order-info">
        <span className="order__text">1 Товар</span>
        <span className="order__text">300 ₽</span>
      </div>
      <div className="cart__order-total">
        <span className="cart__order-text">Итог</span>
        <span className="cart__order-text cart__order-text_strong">300 ₽</span>
      </div>
      <button className="cart__order-button">Оформить заказ</button>
    </section>
  );
};

export default CartOrder;
