import { useSelector } from "react-redux";
import CatalogItem from "./Catalogitem";
import "./CatalogItems.css";

const CatalogItems = () => {
  const productCategories = useSelector((state) => state.products.category);

  console.log(productCategories);
  return (
    <section className="catalog__items">
      <h1 className="catalog__title">Каталог</h1>
      <div className="catalog__body">
        {productCategories.map((item) => (
          <CatalogItem key={item.id} category={item.category} img={item.img} />
        ))}
      </div>
    </section>
  );
};

export default CatalogItems;
