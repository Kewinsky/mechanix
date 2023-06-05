import { useState } from "react";
import "./AccountStyles.scss";
import DashboardTab from "./Dashboard/DashboardTab";
import OrdersTab from "./Orders/OrdersTab";
import DetailsTab from "./Details/DetailsTab";
import LogoutTab from "./Logout/LogoutTab";
import NavigationComponent from "../../components/Navigation/NavigationComponent";

const AccountPage = () => {
  const tabs = ["Dashboard", "Orders", "Account details", "Logout"];

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="account__page-wrapper">
      <NavigationComponent
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <div className="account__page-content">
        {selectedTab === 0 ? (
          <DashboardTab />
        ) : selectedTab === 1 ? (
          <OrdersTab />
        ) : selectedTab === 2 ? (
          <DetailsTab />
        ) : selectedTab === 3 ? (
          <LogoutTab />
        ) : null}
      </div>
    </div>
  );
};

export default AccountPage;

/**
      {product.isSold === true ? (
        <div className="product__tile-label">Sold out</div>
      ) : product.discount !== null ? (
        <div className="product__tile-label">- {product.discount}</div>
      ) : null}
 */
