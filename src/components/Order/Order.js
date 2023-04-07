import { useSelector } from "react-redux";
import CardHeaderNotIndex from "../CardHeader/CardHeaderNotIndex";
import OrderItem from "./OrderItem";
import "./Order.css";
const Order = () => {
  const orders = useSelector((state) => state.getOrder);
  const getUserId = useSelector((state) => state.user.id);
  const currentOrders = orders.filter((item) => item.userId === getUserId);

  const ordersItems =
    currentOrders.length > 0 ? (
      currentOrders.map((item) => (
        <OrderItem
          key={item.id}
          id={item.id}
          items={item.items}
          date={item.date}
          totalPrice={item.totalPrice}
        />
      ))
    ) : (
      <h1> Нет заказов</h1>
    );

  return (
    <section className="orders">
      <div className="orders__title">Заказы</div>
      <div className="orders__body">{ordersItems}</div>
    </section>
  );
};

export default Order;
