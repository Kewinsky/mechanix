import "./OrdersStyles.scss";

const OrdersTab = () => {
  const items = ["item_1", "item_2", "item_3"];

  return (
    <div>
      <table className="orders-table">
        <thead className="orders-heading">
          <tr>
            <th>ORDER NUMBER</th>
            <th>DATE</th>
            <th>STATUS</th>
            <th>TOTAL</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody className="orders-data">
          {items.map((item) => (
            <tr>
              <td>123456789</td>
              <td>April 29, 2022</td>
              <td>Delivered</td>
              <td>$ 25</td>
              <td>
                <a href="/order">View Order</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="orders-wrapper">
        {items.map((item) => (
          <div className="orders-order">
            <div className="info">
              <p>ORDER NUMBER</p>
              <p>8372950284715</p>
            </div>
            <div className="info">
              <p>DATE</p>
              <p>April 29, 2022</p>
            </div>
            <div className="info">
              <p>STATUS</p>
              <p>Delivered</p>
            </div>
            <div className="info">
              <p>TOTAL</p>
              <p>$ 25</p>
            </div>
            <div className="info">
              <p>DATE</p>
              <a href="/order">View Order</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersTab;
