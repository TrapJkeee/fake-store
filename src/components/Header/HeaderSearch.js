import { useState } from "react";
import { useSelector } from "react-redux";
import SearchSVG from "../../assets/svg/SearchSVG";
import "./HeaderSearch.css";
import HeaderSearchItems from "./HeaderSearchItems";
const HeaderSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [isInputFocus, setIsInputFocus] = useState(false);
  const items = useSelector((state) => state.products.products);

  const filteritems = items
    .map((item) => item)
    .filter((item) =>
      item.title.toLowerCase().includes(inputValue.toLowerCase())
    );

  const isInputFocusHandler = (isInpitFocus) => {
    setIsInputFocus(isInpitFocus);
  };

  return (
    <div className="header__search">
      <form>
        <input
          type="text"
          placeholder="Найти товар"
          className="header__search-input"
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsInputFocus(true)}
        />
        {isInputFocus && inputValue && filteritems.length > 0 && (
          <ul className="header__search-items">
            {filteritems.map((item) => (
              <HeaderSearchItems
                key={item.id}
                id={item.id}
                title={item.title}
                category={item.category}
                isInputFocus={isInputFocusHandler}
              />
            ))}
          </ul>
        )}

        <span className="header__search-svg">
          <SearchSVG />
        </span>
      </form>
    </div>
  );
};

export default HeaderSearch;
