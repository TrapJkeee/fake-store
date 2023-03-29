import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Product.css";
const Product = ({ id, title, img, price }) => {
  const { pathname } = useLocation();
  const [isWasClick, setIsWasClick] = useState(false);
  const clickHandler = () => {
    setIsWasClick(true);
  };
  const button = isWasClick ? (
    <button className="product__button product__button_add-item">
      <span className="product__button_add-item_mark">-</span>
      <span>2</span>
      <span className="product__button_add-item_mark">+</span>
    </button>
  ) : (
    <button
      onClick={clickHandler}
      className="product__button product__button_buy"
    >
      В корзину
    </button>
  );
  return (
    <div className="product">
      <div className="product__item">
        <Link to={`${pathname}/${title}`} className="product__body">
          <img src={img} alt="item_img" className="product__img" />
          <div className="product__price">$ {price.toFixed(2)}</div>
          <div className="product__title">{title}</div>
        </Link>
        {button}
      </div>
    </div>
  );
};

export default Product;
