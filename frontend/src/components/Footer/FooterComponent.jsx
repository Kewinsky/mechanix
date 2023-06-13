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
      <div className="top">
        <ul className="menu">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/shop">PRODUCTS</a>
          </li>
          <li>
            <a href="/aboutus">ABOUT US</a>
          </li>
          <li>
            <a href="/contactus">CONTACT US</a>
          </li>
        </ul>
        <div className="newsletter">
          <form>
            <input
              type="email"
              placeholder="Give an email, get the newsletter."
            />
            <button type="submit">
              <BsArrowRight size="24" />
            </button>
          </form>
        </div>
      </div>

      <div className="bottom">
        <div className="copyright">
          <span>&copy; 2023 Mechanix. </span>{" "}
          <a href="/terms-of-use">Terms of use</a> <span>and</span>{" "}
          <a href="/privacy-policy">privacy policy</a>.
        </div>
        <div className="socials">
          <ul>
            <li>
              <a href="/">
                <BsLinkedin size="24" />
              </a>
            </li>
            <li>
              <a href="/">
                <BsFacebook size="24" />
              </a>
            </li>
            <li>
              <a href="/">
                <BsTwitter size="24" />
              </a>
            </li>
            <li>
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
