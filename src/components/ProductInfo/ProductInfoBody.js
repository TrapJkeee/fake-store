import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { cartActions } from "../../store/cart-slice";
import "./ProductInfoBody.css";
const ProductInfoBody = () => {
  const { title } = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);
  const currentProduct = products.find((item) => item.title === title);

  let { id, title: itemTitle, images: img, price, ...rest } = currentProduct;

  img = img[0];
  const items = useSelector((state) => state.cart.items);
  const currentItem = items.find((item) => item.id === id);

  const addItemHandler = () => {
    dispatch(cartActions.addItem({ id, title: itemTitle, img, price }));
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItem(id));
  };

  const button = currentItem ? (
    <button className="product-info__button product-info__button-add-item">
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
    <button onClick={addItemHandler} className="product-info__button">
      В корзину
    </button>
  );
  return (
    <>
      <div className="product-info__title">{currentProduct.title}</div>

      <div className="product-info__body">
        <img
          className="product-info__img"
          src={currentProduct.images[0]}
          alt="product"
        />
        <div className="product-info__cart">
          <div className="product-info__price">
            {currentProduct.price.toFixed(2)} $
          </div>
          {button}

          <div className="product-info__text">
            <p>{currentProduct.description}</p>
            <p>
              Бренд -
              <strong className="product-info__text_strong">
                {` ${currentProduct.brand}`}
              </strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfoBody;
