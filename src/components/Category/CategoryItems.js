import { useParams } from "react-router-dom";
import CategoryBody from "./CategoryBody";
import "./CategoryItems.css";
const CategoryItems = () => {
  const params = useParams();
  const title = params.category[0].toUpperCase() + params.category.slice(1);

  return (
    <section className="category__items">
      <h1 className="category__title">{title}</h1>
      <CategoryBody />
    </section>
  );
};

export default CategoryItems;
