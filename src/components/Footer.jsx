import React from "react";
import {ReactComponent as Logo} from "../images/logo.svg";
import Facebook from "../images/icon-facebook.svg"
import Twitter from "../images/icon-twitter.svg"
import Pinterest from "../images/icon-pinterest.svg"
import Instagram from "../images/icon-instagram.svg"


function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <Logo fill="gray" stroke="gray"/>
      </div>
      <div className="lists">
      <div className="list-container">
        <h6>Features</h6>
      <ul>
        <li>Link Shortening</li>
        <li>Branded Links</li>
        <li>Analytics</li>
      </ul>
      </div>
      <div className="list-container">
        <h6>Features</h6>
      <ul>
        <li>Link Shortening</li>
        <li>Branded Links</li>
        <li>Analytics</li>
      </ul>
      </div>
      <div className="list-container">
        <h6>Company</h6>
      <ul>
        <li>Link Shortening</li>
        <li>Branded Links</li>
        <li>Analytics</li>
      </ul>
      </div>
      </div>
        <div className="social-icons">
          <img src={Facebook} alt="" />
          <img src={Twitter} alt="" />
          <img src={Pinterest} alt="" />
          <img src={Instagram} alt="" />
          
        </div>
    </footer>
  );
}

export default Footer;
