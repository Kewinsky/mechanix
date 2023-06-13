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
    <div className="sidebar-item">
      <img src={photo} alt="keyboard" />
      <div className="heading">
        <div>
          <p>Title</p>
          <p className="price">$ 28,00</p>
        </div>
        <div className="quantity-component">
          QTY:
          <button className="left" onClick={handleSubstractClick}>
            -
          </button>
          <p>{quantity}</p>
          <button className="right" onClick={handleAddClick}>
            +
          </button>
        </div>
      </div>
      <button className="remove-btn">
        <BsFillXCircleFill size="20" />
      </button>
    </div>
  );
};

export default SidebarItemComponent;
