import { useSelector } from "react-redux";
import CartOrder from "./CartOrder";

import Cart from "./Cart";
import "./Carts.css";

const Carts = () => {
  const items = useSelector((state) => state.cart.items);

  if (items.length === 0) {
    return (
      <section className="carts">
        <div className="carts__title">Корзина</div>
        <section className="carts__body">
          <div className="carts__group">
            <h1>Товаров нет в корзине</h1>
          </div>
        </section>
      </section>
    );
  }

  return (
    <section className="carts">
      <div className="carts__title">Корзина</div>
      <section className="carts__body">
        <div className="carts__group">
          {items.map((item) => (
            <Cart
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              img={item.img}
              totalPrice={item.totalPrice}
              quantity={item.quantity}
            />
          ))}
        </div>

        <CartOrder />
      </section>
    </section>
  );
};

export default Carts;
