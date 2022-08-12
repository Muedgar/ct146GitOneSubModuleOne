import React from "react";
import {Outlet, Link} from "react-router-dom";
import "./Navigation.css"


function Navigation() {
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
                <Link to="/agent/pending">Pending Requests</Link>
                <Link to="/agent/rejected">Rejected Requests</Link>
                <Link to="/agent/approved">Approved Requests</Link>
                <Link to="/agent/availability">Availability Schedule</Link>
                <button onClick={Logout} className="btn btn-danger">Logout</button>
            
            </div>

                <Outlet className="content" />
            
            
                
            </div>
            
        </div>

    );
}

export default Navigation;


/*
View pending requests
		View approved requests
		View rejected requests
		Set and view availability schedules
*/