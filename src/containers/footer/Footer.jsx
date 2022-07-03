import { ReactComponent as Logo } from "../../images/logo.svg";
import Facebook from "../../images/icon-facebook.svg";
import Twitter from "../../images/icon-twitter.svg";
import Pinterest from "../../images/icon-pinterest.svg";
import Instagram from "../../images/icon-instagram.svg";

import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <Logo />
      </div>
      <div className="footer__links">
        <div className="footer__links--link">
          <h4>Features</h4>
          <ul>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div className="footer__links--link">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="footer__links--link">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Our Team </li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="footer__socials">
        <img src={Facebook} alt="facebook" />
        <img src={Twitter} alt="twitter" />
        <img src={Pinterest} alt="pinterest" />
        <img src={Instagram} alt="insta" />
      </div>
    </div>
  );
}

export default Footer;
