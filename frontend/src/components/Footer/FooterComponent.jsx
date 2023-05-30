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
    <footer class="footer">
      <div className="footer__top-group">
        <div class="footer__links">
          <ul class="footer__menu">
            <li class="footer__menu-item">
              <a href="/">Home</a>
            </li>
            <li class="footer__menu-item">
              <a href="/">About</a>
            </li>
            <li class="footer__menu-item">
              <a href="/">Services</a>
            </li>
            <li class="footer__menu-item">
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div class="footer__newsletter">
          <form class="footer__newsletter-form">
            <input
              type="email"
              placeholder="Give an email, get the newsletter."
              class="footer__newsletter-input"
            />
            <button type="submit" class="footer__newsletter-btn">
              <BsArrowRight size="24" />
            </button>
          </form>
        </div>
      </div>

      <div className="footer__bottom-group">
        <div class="copyright">
          <span>&copy; 2023 Mechanix. </span> Terms of use <span>and</span>{" "}
          privacy policy.
        </div>
        <div class="footer__social-media">
          <ul className="footer__menu">
            <li className="footer__menu-item">
              <a href="/">
                <BsLinkedin size="24" />
              </a>
            </li>
            <li className="footer__menu-item">
              <a href="/">
                <BsFacebook size="24" />
              </a>
            </li>
            <li className="footer__menu-item">
              <a href="/">
                <BsTwitter size="24" />
              </a>
            </li>
            <li className="footer__menu-item">
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
