import React from "react";
import "./Home.css";
import Hero from "./hero/Hero";
import NavBar from "./navbar/NavBar";
function Home() {
    return(
        <div className="homeContainer">
          <NavBar />
          <Hero />  
        </div>
    );
}

export default Home;