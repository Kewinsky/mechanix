import Slider from "@mui/material/Slider";
import { useState } from "react";
import "./RangeSliderStyles.scss";

const valuetext = (value) => {
  return `${value}`;
};

const RangeSliderComponent = () => {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Slider
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={handleChange}
        getAriaValueText={valuetext}
        className="slider-custom"
      />
      <div className="slider-price">
        Price: ${value[0]} - ${value[1]}
      </div>
    </div>
  );
};

export default RangeSliderComponent;
