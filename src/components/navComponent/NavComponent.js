import React from "react";
import {Link} from "react-router-dom";
import "./NavComponent.css";
import UpLogo from "../assets/Up.svg";


function NavComponent(props) {
    return(
        <div id="home" className="navComponentContainer">
            <div className="navComponentLogo">
                <label>CT146</label>
            </div>
            <ul className="navComponentLinks">
                <li><a href="#home0">Home</a></li>
                <li><a href="#aboutus">About Us</a></li>
                <li><a href="#services">Services</a></li>
                {props.nav==="login" ? <Link to="/"><button className="navComponentSignUp">Log in</button></Link>:<Link to="/signup"><button className="navComponentSignUp">Sign Up</button></Link>}
            </ul>
            <a id="homeNav" href="#home0"><img src={UpLogo} /></a>
        </div>
    );
}

export default NavComponent;