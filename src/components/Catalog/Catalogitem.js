import { Link } from "react-router-dom";
import "./CatalogItem.css";
const Catalogitem = ({ category, img }) => {
  return (
    <Link to={`/category/${category}`} className="catalog__item">
      <img className="catalog__img" alt="image-category" src={img} />
      <div className="catalog__text">{category}</div>
    </Link>
  );
};

export default Catalogitem;
