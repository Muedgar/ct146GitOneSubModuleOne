import React from "react";
import "./headerComponents.css";
import InstaLogo from "../assets/Instagram.svg";
import FaceLogo from "../assets/Facebook.svg";
import TwiLogo from "../assets/Twitter.svg";
function HeaderComponents() {
    return(
        <div id="home0" className="headerClass">
            <h1>Contact Us: 0793894000</h1>
            <div className="headerIconsClass">
                <div className="headerIcon">
                    <img src={InstaLogo} alt="Instagram" />
                </div>
                <div className="headerIcon">
                    <img src={FaceLogo} alt="Facebook" />
                </div>
                <div className="headerIcon">
                    <img src={TwiLogo} alt="Twitter" />
                </div>
            </div>
            <label>Solvit Africa</label>
        </div>
    )
}

export default HeaderComponents;