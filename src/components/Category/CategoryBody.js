import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";
import CategoryFilter from "./CategoryFilter";

import "./CategoryBody.css";
import { useState } from "react";

const CategoryBody = () => {
  const productItems = useSelector((state) => state.products.products);
  const { category } = useParams();

  const filterProducts = productItems.filter(
    (item) => item.category === category
  );

  const price = filterProducts.map((item) => item.price);

  const productFilterPrice = (minPrice, maxPrice) => {};

  return (
    <div className="category__body">
      <CategoryFilter price={price} applyValue={productFilterPrice} />
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
