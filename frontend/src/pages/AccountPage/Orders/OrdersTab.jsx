import "./OrdersStyles.scss";

const OrdersTab = () => {
  return (
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
        <tr>
          <td>123456789</td>
          <td>April 29, 2022</td>
          <td>Delivered</td>
          <td>$ 25</td>
          <td>
            <a href="/order">View Order</a>
          </td>
        </tr>
        <tr>
          <td>123456789</td>
          <td>April 29, 2022</td>
          <td>Delivered</td>
          <td>$ 25</td>
          <td>
            <a href="/order">View Order</a>
          </td>
        </tr>
        <tr>
          <td>123456789</td>
          <td>April 29, 2022</td>
          <td>Delivered</td>
          <td>$ 25</td>
          <td>
            <a href="/order">View Order</a>
          </td>
        </tr>
        <tr>
          <td>123456789</td>
          <td>April 29, 2022</td>
          <td>Delivered</td>
          <td>$ 25</td>
          <td>
            <a href="/order">View Order</a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrdersTab;
