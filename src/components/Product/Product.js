import "./Product.css";
const Product = () => {
  return (
    <section className="product">
      <div className="product__img">
        <img src="#" alt="item_img" />
      </div>
      <div className="product__price">300 р</div>
      <div className="product__title">Наушники</div>
      <button className="product__button product__button_buy">В корзину</button>
      {/* <!-- <button className="product__button product__button_add-item">1</button> --> */}
    </section>
  );
};

export default Product;
