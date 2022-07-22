import React from "react";
import {Link} from "react-router-dom";
import "./NavComponent.css";


function NavComponent(props) {
    return(
        <div className="navComponentContainer">
            <div className="navComponentLogo">
                <label>CT146</label>
            </div>
            <ul className="navComponentLinks">
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                {props.nav==="login" ? <Link to="/"><button className="navComponentSignUp">Log in</button></Link>:<Link to="/signup"><button className="navComponentSignUp">Sign Up</button></Link>};
            </ul>
        </div>
    );
}

export default NavComponent;