import React from "react"; 

function Navigation({ handleRender }) {
  return (
    <div className="Nav">
      <div className="navigation boxwidth">
        <div className="Logo">
          <h1>ecrime</h1>
        </div>
        <div className="Left_navs">
          <ul className="nav_list">
            <li className="nav_tab contact">Contact Us✆</li>
            <li className="nav_tab info">i</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
