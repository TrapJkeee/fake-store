import HyphenSVG from "../../assets/svg/HyphenSVG";
import RangeSlider from "../UI/RangeSlider";

import "react-range-slider-input/dist/style.css";
import "./CategoryFilter.css";
import { useEffect, useState } from "react";
const CategoryFilter = ({ price, applyValue }) => {
  const minPrice = Math.min(...price);
  const maxPrice = Math.max(...price);
  const [minInputValue, setMinInputValue] = useState();
  const [maxInputValue, setMaxInputValue] = useState();

  useEffect(() => {
    setTimeout(() => {
      setMinInputValue(minPrice);
      setMaxInputValue(maxPrice);
    }, 1);
  }, [minPrice, maxPrice]);

  const inputRangeHandler = (e) => {
    setMinInputValue(e[0]);
    setMaxInputValue(e[1]);
  };

  const clearInputHandler = () => {
    setMinInputValue(minPrice);
    setMaxInputValue(maxPrice);
  };

  const applyValueHandler = () => {
    applyValue(minInputValue, maxInputValue);
  };

  return (
    <div className="category__filter">
      <div className="category__filter-title">Фильтр</div>
      <div className="category__filter-price-body">
        <div className="category__filter-price-body-subtitle">
          <div className="category__filter-price-body-subtitle-text">Цена</div>
          <button
            className="category__filter-price-body-subtitle-button"
            onClick={clearInputHandler}
          >
            Сбросить
          </button>
        </div>
        <div className="category__filter-price-body-range">
          <input
            className="category__filter-price-body-range-inputNumber"
            type="number"
            min={minPrice}
            max={maxPrice}
            value={minInputValue}
          />
          <HyphenSVG />
          <input
            className="category__filter-price-body-range-inputNumber"
            type="number"
            min={minPrice}
            max={maxPrice}
            value={maxInputValue}
          />
        </div>
        <div className="category__filter-price-body-range-inputRange">
          <RangeSlider
            min={minPrice}
            max={maxPrice}
            allowCross={false}
            onChange={inputRangeHandler}
            value={[minInputValue, maxInputValue]}
          />
        </div>
        <button className="category__filter-button" onClick={applyValueHandler}>
          Применить
        </button>
      </div>
    </div>
  );
};

export default CategoryFilter;
