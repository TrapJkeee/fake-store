import { Link } from "react-router-dom";
import "./CatalogItem.css";
const Catalogitem = ({ category, img }) => {
  const title = category[0].toUpperCase() + category.slice(1);

  return (
    <Link to={`/category/${category}`} className="catalog__item">
      <img className="catalog__img" alt="image-category" src={img} />
      <div className="catalog__text">{title}</div>
    </Link>
  );
};

export default Catalogitem;
