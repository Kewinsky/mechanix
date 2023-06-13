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
    <div className="tile-wrapper">
      {product.isSold === true ? (
        <div className="label">Sold out</div>
      ) : product.discount !== null ? (
        <div className="label">- {product.discount}</div>
      ) : null}
      <div className="photo-container">
        <img src={photo} alt="keyboard" />
        <div className="overlay">
          <div className="icons">
            <button>
              <BsCart size="32" />
            </button>
            <a href="/product">
              <BsEye size="32" />
            </a>
            <button>
              <BsHeart size="32" />
            </button>
          </div>
        </div>
      </div>
      <h3>Title</h3>
      <span className="product__tile-price">$ 69.99</span>
    </div>
  );
};

export default ProductTileComponent;
