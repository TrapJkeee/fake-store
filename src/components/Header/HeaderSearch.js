import SearchSVG from "../../assets/svg/SearchSVG";
import "./HeaderSearch.css";
const HeaderSearch = () => {
  return (
    <div className="header__search">
      <form>
        <input
          type="text"
          placeholder="Найти товар"
          className="header__search-input"
        />

        <span className="header__search-svg">
          <SearchSVG />
        </span>
      </form>
    </div>
  );
};

export default HeaderSearch;
