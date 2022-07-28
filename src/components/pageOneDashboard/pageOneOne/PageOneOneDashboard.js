import React from "react";
import {Link} from "react-router-dom";
import HeaderComponent from "../../headerComponent/HeaderComponent";
import "./PageOneOneDashboard.css";
import NavLinkLogo from "../../assets/NavLinkLogo.svg";

function PageOneOneDashboard() {

       function checkLogin() {
           console.log("checking currently logged in");
           async function check() {
            await fetch("getLoggedIn",{
                headers:{
                    "accepts":"application/json"
                }
            })
            .then(res=>res.json())
            .then(d=> {
                console.log("running",d);
                if(!d.status || d.role!='user') {
                    console.log("trying to redirect");
                    window.location = "/signup";
                }
            }).catch(e=>console.log(e.message));
           }
           check();
       }
       checkLogin();


    function handleLogout() {
        // delete jwt.

        console.log("clicked logout");

        async function logout() {
            await fetch("logout").then(d=>d.json()).then(a=> {
                window.location = "/signup";
            }).catch(e=>console.log(e.message));
        }
        logout();
    }
    

    return (
        <div className="pageOneOneContainer">
            <HeaderComponent />
            <div className="pageOneOneContentOne">
                <h1 className="pageOneOneContainerTitle">CT146</h1>
                <button onClick={handleLogout} className="pageOneOneContentButton">Logout</button>
            </div>
        <div className="pageOneOneContentContainer">
            <div className="pageOneOneSideNav">
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
            <div className="pageOneOneRightSide">
                <h2>INSURANCE</h2>

                <form>
                    <h3>Request Change Of Insurance</h3>
                    <select className="form-control" value="Choose Your Insurance">
                        <option>Choose Your Insurance</option>
                        <option>RSSB</option>
                        <option>UAP</option>
                    </select>
                    <p>To Be Allowed To Change Your Insurance You Should Be Above 20 Years Old And You're a Graduate Student.</p>
                    <Link to="/requestForm"><button>NEXT</button></Link>
                </form>
            </div>
        </div>
        </div>
    );
}

export default PageOneOneDashboard;