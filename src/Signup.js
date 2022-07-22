import React from "react";
import HeaderComponents from "./components/headerComponent/HeaderComponent.js";
import NavComponent from "./components/navComponent/NavComponent.js";
import AboutUsComponent from "./components/aboutUsComponent/AboutUsComponent.js";
import ServiceComponent from "./components/serviceComponent/ServiceComponent.js";
import SignUpComponent from "./components/signUpComponent/SignUpComponent.js";

function Signup() {
  return (
    <div>
      <HeaderComponents />
      <NavComponent nav="login" />
      <SignUpComponent />
      <AboutUsComponent />
      <ServiceComponent />

      
    </div>
  );
}

export default Signup;
