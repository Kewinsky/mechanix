import DropdownComponent from "../Dropdown/DropdownCoponent";
import RangeSliderComponent from "../RangeSlider/RangeSliderComponent";
import SwitchComponent from "../Switch/SwitchComponent";
import "./FilterStyles.scss";
import { BsSearch } from "react-icons/bs";

const FilterComponent = () => {
  const shopByOptions = [
    "FOOD",
    "TRANSPORT",
    "UTILITIES",
    "PERSONAL",
    "HOUSING",
    "MEDICAL",
    "ENTERTAINMENT",
    "SAVINGS",
  ];

  const sortByOptions = [
    "FOOD",
    "TRANSPORT",
    "UTILITIES",
    "PERSONAL",
    "HOUSING",
    "MEDICAL",
    "ENTERTAINMENT",
    "SAVINGS",
  ];

  return (
    <div className="filter-wrapper">
      <div className="search">
        <form>
          <input type="text" placeholder="Search..." />
          <button type="submit">
            <BsSearch size="19" />
          </button>
        </form>
      </div>
      <DropdownComponent placeholder={"Shop By"} data={shopByOptions} />
      <DropdownComponent placeholder={"Sort By"} data={sortByOptions} />
      <RangeSliderComponent />
      <div className="switch-wrapper">
        <label for="onsale">On sale</label>
        <SwitchComponent />
      </div>
      <div className="switch-wrapper">
        <label for="instock">In stock</label>
        <SwitchComponent />
      </div>
      <button type="submit" className="submit">
        Filter
      </button>
    </div>
  );
};

export default FilterComponent;
