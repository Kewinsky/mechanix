import "./SidebarItemStyles.scss";
import photo from "../../../assets/images/default-photo.png";
import QuantityComponent from "../../Quantity/QuantityComponent";
import { BsFillXCircleFill } from "react-icons/bs";
import { useState } from "react";

const SidebarItemComponent = () => {
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
    <div className="sidebar-wrapper">
      <img src={photo} alt="keyboard" />
      <div className="title">
        <div>
          <p>Title</p>
          <p className="price">$ 28,00</p>
        </div>
        <div className="sidebar-quantity-component">
          QTY:
          <button
            className="sidebar-quantity-button left"
            onClick={handleSubstractClick}
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            className="sidebar-quantity-button right"
            onClick={handleAddClick}
          >
            +
          </button>
        </div>
      </div>
      <button className="remove-button">
        <BsFillXCircleFill size="20" />
      </button>
    </div>
  );
};

export default SidebarItemComponent;
