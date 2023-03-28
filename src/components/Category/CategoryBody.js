import Product from "../Product/Product";
import CategoryFilter from "./CategoryFilter";
import CategoryPagination from "./CategoryPagination";
import { useSelector } from "react-redux";
import "./CategoryBody.css";
import { useParams } from "react-router-dom";
const CategoryBody = () => {
  const productItems = useSelector((state) => state.products.products);
  const params = useParams();

  const filterProducts = productItems.filter(
    (item) => item.category === params.category
  );

  const price = filterProducts.map((item) => item.price);

  return (
    <div className="category__body">
      <CategoryFilter price={price} />
      <div className="category__group">
        <div className="category__group-items">
          {filterProducts.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              img={item.images[0]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBody;
