import React from "react";
import "./style.scss";
import Logo from "../../assets/graphics/logo.png";

function Header() {
  return (
    //never use className for testing
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img data-test="logoIMG" src={Logo} alt="logo" />
        </div>
      </div>
    </header>
  );
}

export default Header;
