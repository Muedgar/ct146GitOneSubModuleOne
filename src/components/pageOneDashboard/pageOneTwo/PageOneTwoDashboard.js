import React from "react";
import {Link} from "react-router-dom";
import HeaderComponent from "../../headerComponent/HeaderComponent";
import "./PageOneTwoDashboard.css";
import NavLinkLogo from "../../assets/NavLinkLogo.svg";

function PageOneTwoDashboard() {
    return (
        <div className="pageOneTwoContainer">
            <HeaderComponent />
            <div className="pageOneTwoContentOne">
                <h1 className="pageOneTwoContainerTitle">CT146</h1>
                <Link to="/"><button className="pageOneOneContentButton">Logout</button></Link>
            </div>
        <div className="pageOneTwoContentContainer">
            <div className="pageOneTwoSideNav">
                <h2>Services</h2>

                <ul>
                    <Link to="/requestChangeOfInsurance">
                    <li>
                        <span>Request Change Of Insurance</span>
                        <img src={NavLinkLogo} alt="link" />    
                    </li>
                    </Link>
                    <Link to="/ejoHeza">
                    <li>
                        <span>EJO HEZA</span>
                        <img src={NavLinkLogo} alt="link" />
                    </li>
                    </Link>
                    <Link to="/education">
                    <li>
                        <span>Education</span>
                        <img src={NavLinkLogo} alt="link" />
                    </li>
                    </Link>
                </ul>
            </div>
            <div className="pageOneTwoRightSide">
                <h2>INSURANCE</h2>

                <form>
                    <h3>Education</h3>
                    {/* <select className="form-control" value="Choose Your Insurance">
                        <option>Choose Your Insurance</option>
                        <option>RSSB</option>
                        <option>UAP</option>
                    </select> */}
                    <p>All children, no matter where they live or what their circumstances, have the right to quality education. UNICEF supports children in Rwanda so they can attend school and learn.</p>
                    {/* <button>NEXT</button> */}
                </form>
            </div>
        </div>
        </div>
    );
}

export default PageOneTwoDashboard;