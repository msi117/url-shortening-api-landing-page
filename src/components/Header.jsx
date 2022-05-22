/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../images/logo.svg";
import Menu from "../images/menu.svg"
function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <header>
      <div className="header-container">
        <img src={Logo} alt="Shortly Logo" id="image" />
        <nav id={showNav ? "show" : ""}>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </nav>
        <div className="logins-container" id={showNav ? "show" : ""}>
          <button className="btn">Login</button>
          <button className="btn">Sign Up</button>
        </div>
        <button
          className="hidden"
          id="menu"
          onClick={() => setShowNav(!showNav)}
        > <img src={Menu} alt="Menu" /> </button>
      </div>
    </header>
  );
}

export default Header;
