import HyphenSVG from "../../assets/svg/HyphenSVG";
import "react-range-slider-input/dist/style.css";
import "./CategoryFilter.css";
import RangeSlider from "../UI/RangeSlider";
const CategoryFilter = ({ price }) => {
  const maxPrice = Math.max(...price);
  const minPrice = Math.min(...price);
  return (
    <div className="category__filter">
      <div className="category__filter-title">Фильтр</div>
      <div className="category__filter-price-body">
        <div className="category__filter-price-body-subtitle">
          <div className="category__filter-price-body-subtitle-text">Цена</div>
          <button className="category__filter-price-body-subtitle-button">
            Очистить
          </button>
        </div>
        <div className="category__filter-price-body-range">
          <input
            className="category__filter-price-body-range-inputNumber"
            type="number"
            defaultValue={minPrice}
            min={minPrice}
            max={maxPrice}
          />
          <HyphenSVG />
          <input
            className="category__filter-price-body-range-inputNumber"
            type="number"
            defaultValue={maxPrice}
            min={minPrice}
            max={maxPrice}
          />
        </div>
        <div className="category__filter-price-body-range-inputRange">
          <RangeSlider
            min={minPrice}
            max={maxPrice}
            defaultValue={[minPrice, maxPrice]}
          />
        </div>
        <button className="category__filter-button">Применить</button>
      </div>
    </div>
  );
};

export default CategoryFilter;
