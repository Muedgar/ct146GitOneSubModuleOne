//email,password,name,nationalId,phone,dob,address
import React from "react";
import { Link } from "react-router-dom";
import "./SignUpComponent.css";

function SignUpComponent() {
    return(
        <div className="heroContainer2">
            <div className="heroLeftContainer2">
                <h1 className="heroLeftTitle2">The Easiest Way To Work With Your Insurance.</h1>
                <label>Our Health, <span>Our Future</span></label>
                <button>Read More</button>
            </div>

            <form className="heroRightContainer2">
                <title>Login Your Account</title>
                <input className="form-control" type="text" placeholder="Email" />
                <input className="form-control" type="password" placeholder="Password" />
                <input className="form-control" type="text" placeholder="Name" />
                <input className="form-control" type="number" placeholder="National Id" />
                <input className="form-control" type="tel" placeholder="Phone" />
                <input className="form-control" type="date" placeholder="Date of Birth" />
                <input className="form-control" type="text" placeholder="Address" />
                <label>Already Have Account? <Link to="/"><span>Login Here</span></Link></label>
                <Link to="/requestChangeOfInsurance"><button className="btn" type="submit">Sign Up</button></Link>
            </form>
        </div>
    );
}

export default SignUpComponent;