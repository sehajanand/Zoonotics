import React from "react";
import Navbar from "./Navbar.js";
import "./Header.css";

export default function HeaderB() {
  return (
    <>
      <header>
        <Navbar />
        <div style={{ height: `81vh` }}>
          <video className="video" autoplay loop>
            {/* <source src={require('./Assets/pexels-rodnae-productions-7914772.mp4').default} type="video/mp4"/> */}
          </video>
        </div>
      </header>
    </>
  );
}
