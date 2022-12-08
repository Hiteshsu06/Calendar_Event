import React from "react";
import Badge from "../images/badge.png";
import Manager from "../images/manager.png";
import Logo from '../images/logo.png';
import Man from '../images/man.png';
import "../style/Practice.css";

const Practice = () => {
  return (
    <div className="main-container-background">
      <div className="main-container">
        <div className="left-side">
          <div className="logo"><img src={Logo} alt="" width="140px" height="140px" /></div>
          <div className="title">Get going with your Engineering dreams</div>
          <div className="left-side-down-logo">
            <div className="left-side-down-logo-logo">
              <div className="left-side-down-logo-logo-tag">
                <div className="left-side-down-logo-logo-tag-logo"><img src={Badge} alt="" width="40px" height="40px" /></div>
              </div>
              <div className="left-side-down-logo-logo-text">
                <span>Rewarding</span>
                <br />
                <span>Opportunity</span>
              </div>
            </div>
            <div className="left-side-down-logo-horizontal-line"></div>
            <div className="left-side-down-logo-logo">
              <div className="left-side-down-logo-logo-tag">
                <div className="left-side-down-logo-logo-tag-logo"><img src={Manager} alt="" width="40px" height="40px" /></div>
              </div>
              <div className="left-side-down-logo-logo-text">
                <span>Renowned</span>
                <br />
                <span>Companies</span>
              </div>
            </div>
          </div>
        </div>
        <div className="middle-side">
          <div className="middle-1">100% Placements</div>
          <div className="middle-2">HEIHEST PACKAGE OFFERED</div>
          <div className="middle-3">INR 30 LPA</div>
          <div className="middle-4">Admission open</div>
          <div className="middle-5"><div className="for">for</div><div className="btech">B.TECH</div></div>
          <div className="middle-6">(Batch 2023-27)</div>
        </div>
        <div className="right-side">
          <div>
            <div className="apply-now">APPLY NOW</div>
          </div>
          <div className="man-image">
            <img src={Man} alt="" width="280px" height="320px" />
          </div>
          <div className="AdChoices">
            AdChoices
          </div>
        </div>
        <div className="advertisement"> 
          ADVERTISEMENT
        </div>
      </div>
    </div>
  );
};

export default Practice;
