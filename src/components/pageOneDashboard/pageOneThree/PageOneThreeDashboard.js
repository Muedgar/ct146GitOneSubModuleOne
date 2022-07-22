import React from "react";
import {Link} from "react-router-dom";
import HeaderComponent from "../../headerComponent/HeaderComponent";
import "./PageOneThreeDashboard.css";
import NavLinkLogo from "../../assets/NavLinkLogo.svg";

function PageOneThreeDashboard() {
    return (
        <div className="pageOneThreeContainer">
            <HeaderComponent />
            <div className="pageOneThreeContentOne">
                <h1 className="pageOneThreeContainerTitle">CT146</h1>
                <Link to="/"><button className="pageOneOneContentButton">Logout</button></Link>
            </div>
        <div className="pageOneThreeContentContainer">
            <div className="pageOneThreeSideNav">
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
            <div className="pageOneThreeRightSide">
                <h2>INSURANCE</h2>

                <form>
                    <h3>EJO HEZA</h3>
                    {/* <select className="form-control" value="Choose Your Insurance">
                        <option>Choose Your Insurance</option>
                        <option>RSSB</option>
                        <option>UAP</option>
                    </select> */}
                    <p>EJOHEZA NI UBWIZIGAME BW'IGIHE KIREKIRE, BWASHYIZWEHO NA GUVERINOMA Y'URWANDA BINYUZE MU ITEGEKO NO 29/2017. EJOHEZA IGUFASHA KWIZIGAMIRA BITYO UZAGIRE AMASAZIRO MEZA.</p>
                    {/* <button>NEXT</button> */}
                </form>
            </div>
        </div>
        </div>
    );
}

export default PageOneThreeDashboard;