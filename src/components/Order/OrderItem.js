import { useSelector } from "react-redux";
import Product from "../Product/Product";
import "./OrderItem.css";

const OrderItem = ({ items, date, totalPrice, userId }) => {
  return (
    <section className="order">
      <div className="order__body">
        <div className="order__title">
          <div className="order__text">
            <div className="order__date">{date}</div>
            <div className="order__info">в процессе</div>
          </div>
          <div className="order__total-price">{totalPrice.toFixed(2)} $</div>
        </div>
        <div className="order__item">
          {items.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              img={item.img}
              price={item.price}
              category={item.category}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderItem;
