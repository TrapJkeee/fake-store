import ProductInfoBody from "./ProductInfoBody";
import "./ProductInfoItem.css";
const ProductInfoItem = () => {
  return (
    <section className="product-info__item">
      <div className="product-info__title">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam itaque
        atque rerum totam at alias vitae, pariatur incidunt cupiditate
        voluptates nisi quam quod modi voluptatum quo laborum ullam et
        temporibus.
      </div>
      <ProductInfoBody />
    </section>
  );
};

export default ProductInfoItem;
