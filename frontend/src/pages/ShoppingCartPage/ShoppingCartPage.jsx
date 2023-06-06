import CartItem from "./CartItem/CartItemComponent";
import "./ShoppingCartStyles.scss";

const ShoppingCartPage = () => {
  return (
    <div className="cart-wrapper">
      <h1 className="cart-header">Checkout</h1>
      <div className="cart-content">
        <div className="left-column">
          <div className="cart-items">
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <div className="coupon-code">
            <input type="text" placeholder="Coupon Code" />
            <button>APPLY</button>
          </div>
        </div>
        <div className="right-column">
          <h1 className="cart-summary-header">Cart totals</h1>
          <div className="cart-summary">
            <div>
              <p className="margin">SUBTOTAL</p>
              <p>SHIPPING</p>
            </div>
            <div className="cart-summary-info">
              <p className="margin info">$ 112,00</p>
              <div>
                <p className="info">
                  Shipping costs will be calculated once you have provided
                  address.
                </p>
                <div className="cart-cummary-calculate">
                  <p>CALCULATE SHIPPING</p>
                  <input type="text" placeholder="COUNTRY" />
                  <input type="text" placeholder="CITY" />
                  <input type="text" placeholder="POSTAL CODE / ZIP" />
                  <button>CALCULATE</button>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-summary-total">
            <p>TOTAL</p>
            <p>$ 112,00</p>
          </div>
          <button className="submit-button">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
