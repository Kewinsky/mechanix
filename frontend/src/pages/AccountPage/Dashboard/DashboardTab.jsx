import "./DashboardStyles.scss";

const DashboardTab = () => {
  return (
    <div className="dashboard-wrapper">
      <p className="dashboard-greatings">
        Hello <span>User</span>,
      </p>
      <p className="dashboard-content">
        From your account dashboard you can view your <span>recent orders</span>
        , manage your <span>shipping and billing addresses</span>, and edit your
        password and <span>account details</span>.
      </p>
    </div>
  );
};

export default DashboardTab;
