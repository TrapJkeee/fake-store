import "./ProductInfoBody.css";
const ProductInfoBody = () => {
  return (
    <div className="product-info__body">
      <img className="product-info__img" src="#" alt="product" />
      <div className="product-info__cart">
        <div className="product-info__price">300.00 r</div>
        <button className="product-info__button">В козину</button>
        {/* <!-- <button className="product-info__button product-info__button-add">
                    1
                  </button> --> */}

        <div className="product-info__text">
          <p>
            Бренд -
            <strong className="product-info__text_strong"> наушники</strong>
          </p>
          <p>
            Страна -
            <strong className="product-info__text_strong"> Россия</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoBody;
