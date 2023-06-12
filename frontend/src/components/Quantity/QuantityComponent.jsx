import "./QuantityStyles.scss";

const QuantityComponent = ({ quantity, setQuantity }) => {
  const handleAddClick = () => {
    setQuantity(quantity + 1);
  };

  const handleSubstractClick = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="quantity-component">
      <button className="quantity-button left" onClick={handleSubstractClick}>
        -
      </button>
      <p>{quantity}</p>
      <button className="quantity-button right" onClick={handleAddClick}>
        +
      </button>
    </div>
  );
};

export default QuantityComponent;
