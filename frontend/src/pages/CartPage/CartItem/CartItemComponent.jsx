import { useState } from "react";
import "./CartItemStyles.scss";
import photo from "../../../assets/images/default-photo.png";
import { BsFillXCircleFill } from "react-icons/bs";
import QuantityComponent from "../../../components/Quantity/QuantityComponent";

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="item-wrapper">
      <img src={photo} alt="keyboard" />
      <div className="title">
        <div>
          <h3>Title</h3>
          <p className="price">$ 28,00</p>
        </div>
        <QuantityComponent quantity={quantity} setQuantity={setQuantity} />
      </div>
      <button>
        <BsFillXCircleFill size="20" />
      </button>
    </div>
  );
};

export default CartItem;
