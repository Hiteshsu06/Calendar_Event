import React, { useState } from "react";
import "../style/Navbar.css";
import "bootstrap";
import Sidebar from "./Sidebar";
import Contentbar from "./Contentbar";

const Navbar = () => {
const [language,setLanguage]=useState();
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-light" id="navbar">
          <div className="container-fluid" id="navbar-main-div">
            <h1 className="navbar-brand" id="navbar-heading">
              ELIALAY
            </h1>
            <div className="collapse navbar-collapse" id="navbar-right-div">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <div className="dropdown">
                    <select
                      className="btn btn-secondary dropdown-toggle"
                      id="languageDropdown"
                      name="language"
                      value={language}
                      onChange={(e)=>{setLanguage(e.target.value)}}
                    >
                      <option className="dropdown-item" value="none">
                        Language
                      </option>
                      <option className="dropdown-item" value="english">
                        English
                      </option>
                      <option className="dropdown-item" value="hindi">
                        Hindi
                      </option>
                    </select>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div id="sidebar-contentbar">
        <div id="sidebar">
          <Sidebar />
        </div>
        <div id="contentbar">
          <Contentbar language={language} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
