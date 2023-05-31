import "./NavbarStyles.scss";
import {
  BsSearch,
  BsCart,
  BsPersonCircle,
  BsBoxArrowRight,
} from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <a href="/" className="navbar__brand">
        <span>M</span>ECHANiX_
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="custom-toggler-icon">
          <AiOutlineMenu size="24" />
        </span>
      </button>
      <div
        className="navbar__menu-group collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav navbar__menu">
          <li className="navbar__item">
            <a href="/shop">Products</a>
          </li>
          <li className="navbar__item">
            <a href="/shop">Keyboards</a>
          </li>
          <li className="navbar__item">
            <a href="/shop">Accessories</a>
          </li>
          <li className="navbar__item">
            <a href="/aboutus">About Us</a>
          </li>
        </ul>
        <span className="navbar__separator" />
        <div className="navbar__icon-menu">
          <ul className="navbar__menu navbar-nav">
            <li className="navbar__item search">
              <a href="/">
                <BsSearch size="24" className="search-btn" />
              </a>
              <form className="navbar__search">
                <input
                  type="text"
                  placeholder="Search"
                  className="navbar__item-input"
                />
              </form>
            </li>
            <li className="navbar__item cart">
              <a href="/cart">
                <BsCart size="24" />
              </a>
            </li>
            <li className="navbar__item my-account">
              <a href="/myaccount">
                <BsPersonCircle size="24" />
              </a>
            </li>
            <li className="navbar__item logout">
              <a href="/logout">
                <BsBoxArrowRight size="24" /> Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
