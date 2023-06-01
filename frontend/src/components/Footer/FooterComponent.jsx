import "./FooterStyles.scss";
import {
  BsLinkedin,
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsArrowRight,
} from "react-icons/bs";

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer__top-group">
        <div className="footer__links">
          <ul className="footer__menu">
            <li className="footer__menu-item">
              <a href="/">HOME</a>
            </li>
            <li className="footer__menu-item">
              <a href="/shop">PRODUCTS</a>
            </li>
            <li className="footer__menu-item">
              <a href="/aboutus">ABOUT US</a>
            </li>
            <li className="footer__menu-item">
              <a href="/contactus">CONTACT US</a>
            </li>
          </ul>
        </div>
        <div className="footer__newsletter">
          <form className="footer__newsletter-form">
            <input
              type="email"
              placeholder="Give an email, get the newsletter."
              className="footer__newsletter-input"
            />
            <button type="submit" className="footer__newsletter-btn">
              <BsArrowRight size="24" />
            </button>
          </form>
        </div>
      </div>

      <div className="footer__bottom-group">
        <div className="copyright">
          <span>&copy; 2023 Mechanix. </span>{" "}
          <a href="/terms-of-use" className="footer__policy-links">
            Terms of use
          </a>{" "}
          <span>and</span>{" "}
          <a href="/privacy-policy" className="footer__policy-links">
            privacy policy
          </a>
          .
        </div>
        <div className="footer__social-media">
          <ul className="footer__menu">
            <li className="footer__menu-item social">
              <a href="/">
                <BsLinkedin size="24" />
              </a>
            </li>
            <li className="footer__menu-item social">
              <a href="/">
                <BsFacebook size="24" />
              </a>
            </li>
            <li className="footer__menu-item social">
              <a href="/">
                <BsTwitter size="24" />
              </a>
            </li>
            <li className="footer__menu-item social">
              <a href="/">
                <BsInstagram size="24" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
