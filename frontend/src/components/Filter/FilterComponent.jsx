import "./FilterStyles.scss";

const FilterComponent = () => {
  return (
    <div className="filter-wrapper">
      <input type="text" placeholder="Search..." />
      <div>Shop By</div>
      <div>Sort By</div>
      <input type="range" className="filter-slider" />
      <div className="filter-switch-wrapper">
        <label for="onsale">On sale</label>
        <input type="checkbox" id="onsale" name="onsale" />
      </div>
      <div className="filter-switch-wrapper">
        <label for="instock">In stock</label>
        <input type="checkbox" id="instock" name="instock" />
      </div>
    </div>
  );
};

export default FilterComponent;
