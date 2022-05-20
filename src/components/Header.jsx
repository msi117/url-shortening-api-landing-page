import React from "react";
import Logo from "../images/logo.svg";
function Header() {
  return (
    <header>
      <div className="header-container">
        <nav>
          <img src={Logo}  alt="Shortly Logo" />
          <p>Features</p>
          <p>Pricing</p>
          <p>Resources</p>
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
