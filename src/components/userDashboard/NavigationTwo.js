import React from "react";
import {Outlet, Link} from "react-router-dom";
import "./Navigation.css"


function NavigationTwo() {
    let user = JSON.parse(sessionStorage.getItem("currentlyLoggedin"));
    if(!user) {
        console.log("no user logged in");
        window.location = "/login";
    }
    function Logout() {
        sessionStorage.removeItem("currentlyLoggedin");
        window.location = "/login";
    }

    return(
        <div className="Navigation">
            <div className="header">
                <h1>Welcome to Tweetup</h1>
            </div>

            <div>
            <div className="sidebar">
                <Link to="/user/sending">Send Requests</Link>
                <Link to="/user/updates">Requests Updates</Link>
                <Link to="/user/availability">Service Availability</Link>
                <button onClick={Logout} className="btn btn-danger">Logout</button>
            </div>

                <Outlet className="content" />
            
            
                
            </div>
            
        </div>

    );
}

export default NavigationTwo;


/*
View pending requests
		View approved requests
		View rejected requests
		Set and view availability schedules
*/