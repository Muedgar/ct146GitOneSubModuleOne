import React from "react";
import { Link } from "react-router-dom";
import "./HeroComponent.css";

function HeroComponent() {

    async function handleLogin(e) {
        e.preventDefault();

        const email = document.getElementById("emailLogin").value;
        const password = document.getElementById("passwordLogin").value;
        const data = {email,password};
        await fetch("login", {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
          }).then(response=>response.json()).then(async d=> {
            let role = d.user.roles;
            console.log(d.jwt);
    
            if(role === "insurance") {
                
                // await fetch("")
                //     .then(res=>res.json())
                //     .then(d=>{
                //         console.log(d);
                //     }).catch(e=>console.log(e));
                // store data to session
                sessionStorage.setItem('currentlyLoggedin', JSON.stringify(d.user));
    
                window.location = "agent/pending";
                return;
            }
    
            if(role === "user") {
    
                // await fetch()
                // .then(res=>res.json())
                // .then(async d=>{
                //     if(d.userDashboard) {
                //         await fetch("setLoggedIn/user").then(res=>{
                //             res.json();
                //         }).then(d=> {
                //             window.location = "/requestChangeOfInsurance";
                //         }).catch(e=> console.log(e.message))
                //     }
                // }).catch(e=>console.log(e));
                sessionStorage.setItem('currentlyLoggedin', JSON.stringify(d.user));
    
                window.location = "user/sending";
            }
            // fetch specific user
          }).catch(e=>console.log(e.message));


    }
    return(
        <div className="heroContainer">
            <div className="heroLeftContainer">
                <h1 className="heroLeftTitle">The Easiest Way To Work With Your Insurance.</h1>
                <label>Our Health, <span>Our Future</span></label>
                <button>Read More</button>
            </div>

            <form onSubmit={handleLogin} className="heroRightContainer">
                <title>Login Your Account</title>
                <input id="emailLogin" className="form-control" type="text" placeholder="Email" />
                <input id="passwordLogin" className="form-control" type="password" placeholder="Password" />
                {/* <input className="form-control" type="date" placeholder="Date of Birth" /> */}
                <label>Don't have an account? <Link to="/signup"><span>Register Here</span></Link></label>
                <button className="btn" type="submit">Login</button>
            </form>
        </div>
    );
}

export default HeroComponent;