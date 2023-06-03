import "./ProductTileStyles.scss";
import photo from "../../assets/images/default-photo.png";
import { BsCart, BsHeart, BsEye } from "react-icons/bs";
const ProductTileComponent = () => {
  const product = {
    title: "Title",
    price: "69.99",
    discount: "20%",
    isSold: false,
  };

  return (
    <div className="product__tile-wrapper">
      {product.isSold === true ? (
        <div className="product__tile-label">Sold out</div>
      ) : product.discount !== null ? (
        <div className="product__tile-label">- {product.discount}</div>
      ) : null}
      <div className="product__tile-photo">
        <img src={photo} alt="keyboard" />
        <div className="product__tile-overlay">
          <div className="product__tile-icons">
            <a href="/" className="product__tile-icon">
              <BsCart size="32" />
            </a>
            <a href="/" className="product__tile-icon">
              <BsEye size="32" />
            </a>
            <a href="/" className="product__tile-icon">
              <BsHeart size="32" />
            </a>
          </div>
        </div>
      </div>
      <h3 className="product__tile-title">Title</h3>
      <span className="product__tile-price">$ 69.99</span>
    </div>
  );
};

export default ProductTileComponent;
