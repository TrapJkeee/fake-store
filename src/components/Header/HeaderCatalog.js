import { Link } from "react-router-dom";
import CatalogSVG from "../../assets/svg/CatalogSVG";
import "./HeaderCatalog.css";
const HeaderCatalog = () => {
  return (
    <Link to="/catalog" className="header__catalog-body">
      <span className="header__catalog-svg">
        <CatalogSVG />
      </span>

      <span className="header__catalog-title">Каталог</span>
    </Link>
  );
};

export default HeaderCatalog;
