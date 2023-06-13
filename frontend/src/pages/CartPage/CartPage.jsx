import CartItem from "./CartItem/CartItemComponent";
import "./CartStyles.scss";

const CartPage = () => {
  return (
    <div className="cart-page">
      <h1>Cart</h1>
      <div className="content">
        <div className="left-column">
          <div className="items">
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
          <h3>Cart totals</h3>
          <div className="cart-totals">
            <div>
              <p>SUBTOTAL</p>
              <br></br>
              <p>SHIPPING</p>
            </div>
            <div className="infos">
              <p>$ 112,00</p>
              <br></br>

              <div>
                <p>
                  Shipping costs will be calculated once you have provided
                  address.
                </p>
                <div className="calculate">
                  <p>CALCULATE SHIPPING</p>
                  <input type="text" placeholder="COUNTRY" />
                  <input type="text" placeholder="CITY" />
                  <input type="text" placeholder="POSTAL CODE / ZIP" />
                  <button>CALCULATE</button>
                </div>
              </div>
            </div>
          </div>
          <div className="total">
            <p>TOTAL</p>
            <p>$ 112,00</p>
          </div>
          <button className="submit-button">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
