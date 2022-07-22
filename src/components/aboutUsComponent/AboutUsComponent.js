import React from "react";
import "./AboutUsComponent.css";
import CheLogo from "../assets/Check.svg";
import EyLogo from "../assets/Eye.svg";

function AboutUsComponent() {
    return(
        <div className="aboutUsContainer">
            <h1>Who We Are</h1>

            <div className="aboutUsDivs">
                <div className="aboutUsContent aboutUsLeft">
                    <label><span>
                    <img src={CheLogo} alt="Check" />
                    </span><b>Our Mission</b></label>
                    <p>Facilitate Health Customers To Easily Pay For Medicine</p>
                </div>

                <div className="aboutUsContent aboutUsRight">
                    <label><span>
                    <img src={EyLogo} alt="Eye" />
                    </span><b>Our Vission</b></label>
                    <p>Vision Of CT146 is to provide our good services to our customer be health and wealth</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUsComponent;