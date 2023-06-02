import FilterComponent from "../../components/Filter/FilterComponent";
import ProductTileComponent from "../../components/ProductTile/ProductTileComponent";
import "./ShopStyles.scss";

const ShopPage = () => {
  return (
    <div>
      <h1 className="shop-header">Shop</h1>
      <div className="shop-wrapper">
        <FilterComponent />
        <div className="shop-products">
          <ProductTileComponent />
          <ProductTileComponent />
          <ProductTileComponent />
          <ProductTileComponent />
          <ProductTileComponent />
          <ProductTileComponent />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
