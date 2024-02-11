import Button from "../../components/button/Button";
import "./navbar.css";
import logo from "../../images/logo.svg";
import menu from "../../images/menu.svg";
import { useState } from "react";
import { IoMenu, IoCloseSharp } from "react-icons/io5";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };
  const loginStyle = {
    backgroundColor: "inherit",
    color: "var(--Grayish-Violet)",
  };
  const links = [
    {
      id: 1,
      name: "Features",
      url: "#features",
    },
    {
      id: 2,
      name: "Pricing",
      url: "#pricing",
    },
    {
      id: 3,
      name: "Resources",
      url: "Rerources",
    },
  ];

  return (
    <nav>
      <div className="navbar">
        <div className="navbar__logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="navbar__navlinks">
          {links.map((link) => (
            <a key={link.id} href={link.url}>
              {link.name}
            </a>
          ))}
        </div>

        <div className="navbar__logins">
          <Button text="Login" style={loginStyle} />
          <Button text="Sign Up" />
        </div>

        <div className="navbar__menu">
          {showMenu ? (
            <IoCloseSharp
              fill={showMenu ? "white" : "black"}
              onClick={handleMenu}
            />
          ) : (
            <IoMenu onClick={handleMenu} />
          )}
        </div>
        {showMenu ? (
          <div className="navigation__sidebar">
            <div className="navbar__logins--mobile">
              <Button text="Login" style={loginStyle} />
              <Button text="Sign Up" />
            </div>
            <div className="navbar__navlinks--mobile">
              {links.map((link) => (
                <a key={link.id} href={link.url}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
