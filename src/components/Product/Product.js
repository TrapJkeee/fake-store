import "./Product.css";
const Product = ({ title, img, price }) => {
  return (
    <section className="product">
      <img src={img} alt="item_img" className="product__img" />
      <div className="product__price">$ {price.toFixed(2)}</div>
      <div className="product__title">{title}</div>
      <button className="product__button product__button_buy">В корзину</button>
      {/* <!-- <button className="product__button product__button_add-item">1</button> --> */}
    </section>
  );
};

export default Product;
