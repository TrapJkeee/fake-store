import CatalogSVG from "../../assets/svg/CatalogSVG";
import "./HeaderCatalog.css";
const HeaderCatalog = () => {
  return (
    <div className="header__catalog-body">
      <span className="header__catalog-svg">
        <CatalogSVG />
      </span>

      <span className="header__catalog-title">Каталог</span>
    </div>
  );
};

export default HeaderCatalog;
