import SidebarItemComponent from "./SidebarItem/SidebarItemComponent";
import "./SidebarStyles.scss";
import { BsXLg } from "react-icons/bs";

const SidebarComponent = ({ isOpen, setIsOpen }) => {
  const closeSidebar = () => {
    setIsOpen(false);
  };
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-container">
        <button className="sidebar-close" onClick={closeSidebar}>
          <BsXLg size="24" />
        </button>
        <div>
          <h1 className="sidebar-header">Shopping bag</h1>
          <p className="sidebar-quantity">3 items</p>
          <div className="sidebar-items">
            <SidebarItemComponent />
            <SidebarItemComponent />
            <SidebarItemComponent />
            <SidebarItemComponent />
          </div>
        </div>
      </div>
      <div className="sidebar-summary">
        <div className="sidebar-summary-subtotal">
          <p>Subtotal (3 items)</p>
          <p>$ 112,00</p>
        </div>
        <button>VIEW CART</button>
      </div>
    </div>
  );
};

export default SidebarComponent;
