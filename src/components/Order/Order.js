import { useSelector } from "react-redux";
import CardHeaderNotIndex from "../CardHeader/CardHeaderNotIndex";
import Product from "../Product/Product";

const Order = () => {
  const order = useSelector((state) => state.order);
  const items = order.items;
  const totalPrice = order.totalPrice;
  const date = order.date;
  //   const totalPrice = items
  //     .map((item) => item.totalPrice)
  //     .reduce((sum, item) => sum + item);

  return (
    <section className="orders">
      <CardHeaderNotIndex />
      <div className="orders__title">Заказы</div>
      <section className="order">
        <div className="order__body">
          <div className="order__title">
            <div className="order__text">
              <div className="order__date">{date}</div>
              <div className="order__info">в процессе</div>
            </div>
            <div className="order__total-price">{totalPrice}</div>
          </div>
          <div className="order__item">
            {items.map((item) => (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                img={item.img}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Order;
