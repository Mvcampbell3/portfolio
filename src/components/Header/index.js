import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="headerHolder">
      <div className="headerBar">
        <div className="brand">MVC</div>
        <div className="spacer"></div>
        <div className="rightNav">
          <div>Home</div>
          <div>Portfolio</div>
          <div>Contact</div>
        </div>
      </div>
    </div>

  )
}

export default Header;