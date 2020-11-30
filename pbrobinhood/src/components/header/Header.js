import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header__wrapper">
      <div className="header__logo">
        <img
          src="http://2.bp.blogspot.com/-1LnyWj6XB84/Ww7_0Ir51mI/AAAAAAAAAHQ/vc-hk5UcDR09cdfQuoj07k6t_BfT_8HXwCK4BGAYYCw/s1600/Passionate%2BBurger%2BBlog%2BLogo.jpg"
          width={200}
          alt=""
        />
        <div className="header__search">
          <div className="header__searchContainer">
            {/* <SearchOutlined /> */}
            <input placeholder="Search" type="text" />
          </div>
        </div>
      </div>
      <div className="header__menuItems">
        <a href="/">Free Stocks</a>
        <a href="/">PortFolio</a>
        <a href="/">Cash</a>
        <a href="/">Messages</a>
        <a href="/">Account</a>
      </div>
    </div>
  );
}

export default Header;
