import "./OrderStyles.scss";

const OrderPage = () => {
  return (
    <div className="order-wrapper">
      <div className="order-details">
        <h1>Order Details</h1>
        <div className="order-details-wrapper">
          <div className="left-column">
            <div className="order-detail">
              <h3>ORDER NUMBER</h3>
              <p>8372950284715</p>
            </div>
            <div className="order-detail">
              <h3>EMAIL</h3>
              <p>kewin.xyz@gmail.com</p>
            </div>
            <div className="order-detail">
              <h3>PAYMENT METHOD</h3>
              <p>Cash on delivery</p>
            </div>
            <div className="order-detail">
              <h3>ORDER DATE</h3>
              <p>April 29, 2022</p>
            </div>
          </div>
          <div className="right-column">
            <div className="order-detail">
              <h3>DELIVERY OPTION</h3>
              <p>Standard delivery</p>
            </div>
            <div className="order-detail">
              <h3>DELIVERY ADDRESS</h3>
              <p>13 Grasselli Street</p>
              <p>New Hampshire, </p>
              <p>03801 Portsmouth</p>
            </div>
            <div className="order-detail">
              <h3>CONTACT NUMBER</h3>
              <p>+48 123 456 789</p>
            </div>
          </div>
        </div>
      </div>
      <div className="order-summary">
        <h1>Order Summary</h1>
        <div className="order-summary-wrapper">
          <div className="new-row header">
            <p>PRODUCT</p>
            <p>TOTAL</p>
          </div>
          <div>
            <div className="new-row item">
              <p>Item</p>
              <p>$69</p>
            </div>
            <div className="new-row item">
              <p>Item</p>
              <p>$69</p>
            </div>
            <div className="new-row item">
              <p>Item</p>
              <p>$69</p>
            </div>
          </div>
          <div className="new-row subtotal">
            <p>SUBTOTAL</p>
            <p>$69</p>
          </div>
          <div className="new-row shipping">
            <p>SHIPPING</p>
            <p>Free Shipping</p>
          </div>
          <div className="new-row total">
            <p>TOTAL</p>
            <p>$69</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
