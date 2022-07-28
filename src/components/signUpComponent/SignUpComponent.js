//email,password,name,nationalId,phone,dob,address
import React from "react";
import { Link } from "react-router-dom";
import "./SignUpComponent.css";

function SignUpComponent() {

    async function handleSignUp(e) {
        e.preventDefault();
        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const name = document.getElementById("name").value;
        const nationalId = document.getElementById("nationalId").value;
        const phone = document.getElementById("phone").value;
        const dob = document.getElementById("dob").value;
        const address = document.getElementById("address").value;

        // setting roles
        let arrayOne = email.split("@");
        let arrayTwo = arrayOne[0].split(".");

        let roles = "";
        if(!arrayTwo[1]) {
            roles="user";
            console.log("empty",roles);
            
        }
        if(arrayTwo[1] === "rssb") {
            roles = "insurance";
        }else if(arrayTwo[1] !== "rssb"){
            roles = "user";
        }

        let data = {
            email,
            password,
            name,
            nationalId,
            phone,
            dob,
            address,
            roles
        }

        
        await fetch("signup", {
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
            
            await fetch("insuranceDashboard/"+d.jwt+"/"+role)
                .then(res=>res.json())
                .then(d=>{
                    console.log(d);
                }).catch(e=>console.log(e));
            return;
        }

        if(role === "user") {

            await fetch("userDashboard/"+d.jwt+"/"+role)
            .then(res=>res.json())
            .then(async d=>{
                if(d.userDashboard) {
                    await fetch("setLoggedIn/user").then(res=>{
                        res.json();
                    }).then(d=> {
                        window.location = "/requestChangeOfInsurance";
                    }).catch(e=> console.log(e.message))
                }
            }).catch(e=>console.log(e));
        }
        // fetch specific user
      }).catch(e=>console.log(e.message));


    }

    return(
        <div className="heroContainer2">
            <div className="heroLeftContainer2">
                <h1 className="heroLeftTitle2">The Easiest Way To Work With Your Insurance.</h1>
                <label>Our Health, <span>Our Future</span></label>
                <button>Read More</button>
            </div>

            <form onSubmit={handleSignUp} id="signup" className="heroRightContainer2">
                <title>Login Your Account</title>
                <input id="email" className="form-control" type="text" placeholder="Email" />
                <input id="password" className="form-control" type="password" placeholder="Password" />
                <input id="name" className="form-control" type="text" placeholder="Name" />
                <input id="nationalId" className="form-control" type="number" placeholder="National Id" />
                <input id="phone" className="form-control" type="number" placeholder="Phone" />
                <div className="DobDesign"><input id="dob" className="form-control" type="date" placeholder="Date of Birth"/><span>Date Of Birth</span></div>
                <input id="address" className="form-control" type="text" placeholder="Address" />
                <div className="spaceSignUp"></div>
                <label>Already Have Account? <Link to="/"><span>Login Here</span></Link></label>
                <button className="btn" type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpComponent;