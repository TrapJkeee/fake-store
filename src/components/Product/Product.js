import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { cartActions } from "../../store/cart-slice";

import "./Product.css";
const Product = ({ id, title, img, price, category, quantity }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const items = useSelector((state) => state.cart.items);
  const currentItem = items.find((item) => item.id === id);

  const addItemHandler = () => {
    dispatch(cartActions.addItem({ id, title, img, price, category }));
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItem(id));
  };

  const button = currentItem ? (
    <button className="product__button product__button_add-item">
      <span
        className="product__button_add-item_mark"
        onClick={removeItemHandler}
      >
        -
      </span>
      <span>{currentItem.quantity}</span>
      <span className="product__button_add-item_mark" onClick={addItemHandler}>
        +
      </span>
    </button>
  ) : (
    <button
      onClick={addItemHandler}
      className="product__button product__button_buy"
    >
      В корзину
    </button>
  );

  const priceOnOrder =
    pathname === "/order" ? (
      <div className="product__price">
        $ {price.toFixed(2)} x {quantity}
      </div>
    ) : (
      <div className="product__price">$ {price.toFixed(2)}</div>
    );

  return (
    <div className="product">
      <div className="product__item">
        <Link to={`/${category}/${title}`} className="product__body">
          <img src={img} alt="item_img" className="product__img" />
          {priceOnOrder}
          <div className="product__title">{title}</div>
        </Link>
        {button}
      </div>
    </div>
  );
};

export default Product;
