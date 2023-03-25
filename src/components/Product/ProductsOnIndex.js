import Product from "./Product";
import CardHeaderIndex from "../CardHeader/CardHeaderIndex";
import "./ProductsOnIndex.css";

const ProductsOnIndex = () => {
  return (
    <section className="products">
      <CardHeaderIndex title="Акции" text="все" />
      <div className="products__body">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
};

export default ProductsOnIndex;
