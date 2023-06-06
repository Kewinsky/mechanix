import { useState } from "react";
import "./CartItemStyles.scss";
import photo from "../../../assets/images/default-photo.png";
import { BsFillXCircleFill } from "react-icons/bs";

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  const handleAddClick = () => {
    setQuantity(quantity + 1);
  };

  const handleSubstractClick = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="item-wrapper">
      <img src={photo} alt="keyboard" />
      <div className="title">
        <p>Title</p>
        <p className="price">$ 28,00</p>
        <div className="quantity-component mobile">
          <button
            className="quantity-button left"
            onClick={handleSubstractClick}
          >
            -
          </button>
          <p>{quantity}</p>
          <button className="quantity-button right" onClick={handleAddClick}>
            +
          </button>
        </div>
      </div>
      <div className="quantity-component pc">
        <button className="quantity-button left" onClick={handleSubstractClick}>
          -
        </button>
        <p>{quantity}</p>
        <button className="quantity-button right" onClick={handleAddClick}>
          +
        </button>
      </div>
      <button className="remove-button">
        <BsFillXCircleFill size="20" />
      </button>
    </div>
  );
};

export default CartItem;
