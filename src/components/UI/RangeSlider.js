import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./RangeSlider.css";

const RangeSlider = ({ min, max, defaultValue }) => {
  return (
    <>
      <Slider range min={min} max={max} defaultValue={defaultValue} />
    </>
  );
};

export default RangeSlider;
