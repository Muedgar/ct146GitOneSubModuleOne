import React from "react";
import { Link } from "react-router-dom";
import "./HeroComponent.css";

function HeroComponent() {

    
    return(
        <div className="heroContainer">
            <div className="heroLeftContainer">
                <h1 className="heroLeftTitle">The Easiest Way To Work With Your Insurance.</h1>
                <label>Our Health, <span>Our Future</span></label>
                <button>Read More</button>
            </div>

            <form className="heroRightContainer" action="/requestChangeOfInsurance">
                <title>Login Your Account</title>
                <input className="form-control" type="text" placeholder="Email" />
                <input className="form-control" type="password" placeholder="Password" />
                {/* <input className="form-control" type="date" placeholder="Date of Birth" /> */}
                <label>Don't have an account? <Link to="/signup"><span>Register Here</span></Link></label>
                <button className="btn" type="submit">Login</button>
            </form>
        </div>
    );
}

export default HeroComponent;