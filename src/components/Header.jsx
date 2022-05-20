/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../images/logo.svg";
function Header() {
  return (
    <header>
      <div className="header-container">
        <nav>
          <img src={Logo}  alt="Shortly Logo" />
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </nav>
        <div className="logins-container">
          <button className="btn">Login</button>
          <button className="btn">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
