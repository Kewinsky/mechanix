import SidebarItemComponent from "./SidebarItem/SidebarItemComponent";
import "./SidebarStyles.scss";
import { BsXLg } from "react-icons/bs";

const SidebarComponent = ({ isOpen, setIsOpen }) => {
  const closeSidebar = () => {
    setIsOpen(false);
  };
  return (
    <div className={`sidebar-wrapper ${isOpen ? "open" : ""}`}>
      <div className="container">
        <button className="close-btn" onClick={closeSidebar}>
          <BsXLg size="24" />
        </button>
        <div>
          <h1>Shopping bag</h1>
          <p className="quantity">3 items</p>
          <div className="items">
            <SidebarItemComponent />
            <SidebarItemComponent />
            <SidebarItemComponent />
            <SidebarItemComponent />
          </div>
        </div>
      </div>
      <div className="summary">
        <div className="subtotal">
          <p>Subtotal (3 items)</p>
          <p>$ 112,00</p>
        </div>
        <a href="/cart">
          <button>VIEW CART</button>
        </a>
      </div>
    </div>
  );
};

export default SidebarComponent;
