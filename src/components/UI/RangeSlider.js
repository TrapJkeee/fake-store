import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./RangeSlider.css";

const RangeSlider = ({
  min,
  max,
  defaultValue,
  allowCross,
  onChange,
  value,
}) => {
  return (
    <>
      <Slider
        range
        min={min}
        max={max}
        defaultValue={defaultValue}
        allowCross={allowCross}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default RangeSlider;
