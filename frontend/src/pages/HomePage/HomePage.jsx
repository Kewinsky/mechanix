import ProductTileComponent from "../../components/ProductTile/ProductTileComponent";
import SliderComponent from "../../components/Slider/SliderComponent";
import "./HomeStyles.scss";

const HomePage = () => {
  return (
    <div className="home__page-wrapper">
      <SliderComponent />
      <div className="shop__latest-wrapper">
        <div className="shop__latest-header">
          <h1 className="shop__latest-heading">Shop The Latest</h1>
          <a href="/shop" className="shop__latest-view">
            View All
          </a>
        </div>
        <div className="shop__latest-products">
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

export default HomePage;
