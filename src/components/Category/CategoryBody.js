import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";

import "./CategoryBody.css";

const CategoryBody = () => {
  const productItems = useSelector((state) => state.products.products);
  const { category } = useParams();

  const filterProducts = productItems.filter(
    (item) => item.category === category
  );

  return (
    <div className="category__body">
      <div className="category__group">
        <div className="category__group-items">
          {filterProducts.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              img={item.images[0]}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBody;
