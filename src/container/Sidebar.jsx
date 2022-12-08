import React from "react";
import Check1 from "../images/check-1.png";
import Check2 from "../images/check-2.png";
import Check3 from "../images/check-3.png";
import Check4 from "../images/check-4.png";
import "../style/Sidebar.css";

const Sidebar = () => {
  return (
    <div id="sidebar-main">
      <h4>Groups</h4>
      <div className="sidebar-div">
        <div>
          <img src={Check1} alt="Check1" className="tick-logo" />
        </div>
        <div className="icon-text">Elias (Private)</div>
      </div>
      <div className="sidebar-div">
        <div>
          <img src={Check2} alt="Check2" className="tick-logo" />
        </div>
        <div className="icon-text">Test group (Private)</div>
      </div>
      <div className="sidebar-div">
        <div>
          <img src={Check3} alt="Check3" className="tick-logo" />
        </div>
        <div className="icon-text">All Citizens (Schmucker TEST ORG)</div>
      </div>
      <div className="sidebar-div">
        <div>
          <img src={Check4} alt="Check4" className="tick-logo" />
        </div>
        <div className="icon-text">All Caregivers (Schmucker TEST ORG)</div>
      </div>
    </div>
  );
};

export default Sidebar;
