import FilterComponent from "../../components/Filter/FilterComponent";
import ProductTileComponent from "../../components/ProductTile/ProductTileComponent";
import "./ShopStyles.scss";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <h1>Shop</h1>
      <div className="content">
        <FilterComponent />
        <div className="products">
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
