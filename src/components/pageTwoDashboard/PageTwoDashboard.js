import React from "react";
import {Link} from "react-router-dom";
import HeaderComponent from "../headerComponent/HeaderComponent";
import "./PageTwoDashboard.css";
import User from "../assets/User.svg";

function PageTwoDashboard() {
    return (
        <div className="pageTwoDashboardContainer">
            <HeaderComponent />
            <div className="pageTwoDashboardContentOne">
                <h1 className="pageTwoDashboardContainerTitle">CT146</h1>
                <Link to="/"><button className="pageOneOneContentButton">Logout</button></Link>
            </div>
        
            <h1 className="pageTwoDashboardUserInfo">
                <img src={User} alt="User Information" />
                <span>Personal Information</span>
            </h1>

            <form className="pageTwoDashboardForm">
                    <h3>Education</h3>
                    <input disabled className="pageTwoDashboardFormSelect form-control" type="text" placeholder="Names:" />


                    <input disabled className="pageTwoDashboardFormSelect form-control" type="text" placeholder="Email:" />
                    <input disabled className="pageTwoDashboardFormSelect form-control" type="text" placeholder="National ID:" />
                    <input disabled className="pageTwoDashboardFormSelect form-control" type="text" placeholder="Phone Number:" />


                    <input disabled className="pageTwoDashboardFormSelect form-control" type="text" placeholder="Address:" />

                    <div>
                        <div>
                            <label>From</label>
                            <select className="pageTwoDashboardFormSelect form-control" value="Choose Your Insurance">
                                <option>Choose Your Insurance</option>
                                <option>RSSB</option>
                                <option>UAP</option>
                            </select>
                        </div>
                        <div>
                            <label>To</label>
                            <select className="pageTwoDashboardFormSelect form-control" value="Choose Your Insurance">
                                <option>Choose Your Insurance</option>
                                <option>RSSB</option>
                                <option>UAP</option>
                            </select>
                        </div>
                    </div>
                    
                    <button className="submitRequest">REQUEST</button>
                </form>
        </div>
    );
}

export default PageTwoDashboard;