import React from "react"; 
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="Nav">
      <div className="navigation boxwidth">
        <Link to="/" className="Logo">
          <h1 className="BlogLink">ecrime</h1>
        </Link>
        <div className="Left_navs">
          <ul className="nav_list">
            <li className="nav_tab contact">Contact Us<span className="callicon"></span></li>
            <li className="nav_tab info">i</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
