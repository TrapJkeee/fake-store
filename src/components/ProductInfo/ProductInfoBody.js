import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./ProductInfoBody.css";
const ProductInfoBody = () => {
  const products = useSelector((state) => state.products.products);
  const { title } = useParams();

  const currentProduct = products.find((item) => item.title === title);
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
          <button className="product-info__button">В козину</button>
          {/* <!-- <button className="product-info__button product-info__button-add">
                    1
                  </button> --> */}

          <div className="product-info__text">
            <p>{currentProduct.description}</p>
            <p>
              Бренд -
              <strong className="product-info__text_strong">
                {" "}
                {currentProduct.brand}
              </strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfoBody;
