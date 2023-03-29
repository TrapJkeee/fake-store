import CartOrder from "./CartOrder";
import Cart from "./Cart";
import "./Carts.css";

const Carts = () => {
  return (
    <section className="carts">
      <div className="carts__title">Корзина</div>
      <section className="carts__body">
        <div className="carts__group">
          <Cart />
          <Cart />
        </div>
        <CartOrder />
      </section>
    </section>
  );
};

export default Carts;
