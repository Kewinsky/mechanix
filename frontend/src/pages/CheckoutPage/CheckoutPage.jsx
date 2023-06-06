import "./CheckoutStyles.scss";
import { FaPaypal } from "react-icons/fa";

const CheckoutPage = () => {
  return (
    <div className="checkout-wrapper">
      <h1 className="checkout-header">Shopping Cart</h1>
      <div className="checkout-content">
        <div className="billing-details">
          <h1 className="subheader">Billing Details</h1>
          <form className="billing-form">
            <div className="fullname">
              <input type="text" placeholder="First name" required />
              <input type="text" placeholder="Last name" required />
            </div>
            <input type="text" placeholder="Country" required />
            <input type="text" placeholder="Street Address" required />
            <input type="text" placeholder="Poscode / ZIP" required />
            <input type="text" placeholder="Town / City" required />
            <input type="tel" placeholder="Phone" required />
            <input type="email" placeholder="Email" required />
            <div className="input-checkbox">
              <div className="checkbox">
                <input type="checkbox" id="account" name="account" />
                <label for="account">Create an account?</label>
              </div>
              <div className="checkbox">
                <input type="checkbox" id="address" name="address" />
                <label for="address">Ship to a diffrent address?</label>
              </div>
            </div>
            <input type="text" placeholder="Order notes" />
          </form>
        </div>
        <div className="user-order">
          <h1 className="subheader">Your Order</h1>
          <div className="user-summary-wrapper">
            <div className="new-row header">
              <p>PRODUCT</p>
              <p>TOTAL</p>
            </div>
            <div className="new-row items">
              <div className="item">
                <p>Item</p>
                <p>$69</p>
              </div>
              <div className="item">
                <p>Item</p>
                <p>$69</p>
              </div>
              <div className="item">
                <p>Item</p>
                <p>$69</p>
              </div>
            </div>
            <div className="new-row">
              <p>SUBTOTAL</p>
              <p>$69</p>
            </div>
            <div className="new-row">
              <p>SHIPPING</p>
              <p>Free Shipping</p>
            </div>
            <div className="new-row total">
              <p>TOTAL</p>
              <p>$69</p>
            </div>
            <form className="payment-type">
              <input type="radio" id="bank" name="payment" />
              <label for="bank">Direct bank transfer</label>
              <br />
              <input type="radio" id="blik" name="payment" />
              <label for="blik">Mobile payment</label>
              <br />

              <input type="radio" id="card" name="payment" />
              <label for="card">Credit card</label>
              <br />

              <input type="radio" id="online" name="payment" />
              <label for="online">
                PayPal <FaPaypal />
              </label>
              <br />

              <input type="radio" id="cash" name="payment" />
              <label for="cash">Cash</label>
              <br />
            </form>
            <button className="submit-button">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
