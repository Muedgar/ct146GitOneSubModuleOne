import React from "react";
import HeaderComponents from "./components/headerComponent/HeaderComponent.js";
import NavComponent from "./components/navComponent/NavComponent.js";
import HeroComponent from "./components/heroComponent/HeroComponent.js";
import AboutUsComponent from "./components/aboutUsComponent/AboutUsComponent.js";
import ServiceComponent from "./components/serviceComponent/ServiceComponent.js";

function Login() {
  return (
    <div>
      <HeaderComponents />
      <NavComponent />
      <HeroComponent />
      <AboutUsComponent />
      <ServiceComponent />
    </div>
  );
}

export default Login;
