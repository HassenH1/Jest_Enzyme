import React from "react";
import "./style.scss";
import Logo from "../../assets/graphics/logo.png";

function Header() {
  return (
    <header className="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img className="logoIMG" src={Logo} alt="logo" />
        </div>
      </div>
    </header>
  );
}

export default Header;
