import ProductTileComponent from "../../components/ProductTile/ProductTileComponent";
import SliderComponent from "../../components/Slider/SliderComponent";
import "./HomeStyles.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <SliderComponent />
      <div>
        <div className="header">
          <h1>Shop The Latest</h1>
          <a href="/shop">View All</a>
        </div>
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

export default HomePage;
