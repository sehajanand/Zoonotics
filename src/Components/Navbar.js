import React, { useState } from "react";
import "./Navbar.css";
// import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";
export default function Navbar(p) {
  // document.addEventListener(`DOMContentLoaded`,()=>{
  //   let homeBox=document.getElementsByTagName(`home`);
  //   let allLinks=document.getElementsByTagName(`a`);
  //   homeBox.addEventListener(`mouseenter`,()=>{
  //     homeBox.style.backgroundColor="white";
  //     // allLinks[1].style.color="blue";
  //   });
  // })
  // const yesHamburger=useMediaQuery({query:`(max-width:991px)`});
  // const noHamburger=useMediaQuery({query:`(min-width:991px)`});
  let [homeStyleHome, setHomeStyle] = useState({
    color: "white",
    transform: "translateY(0px)",
  });
  function homeHoverHome() {
    setHomeStyle({
      color: "blue",
      backgroundColor: "white",
      transform: "translateY(-4px)",
      transition: "transform 0.2s ease-in",
    });
  }
  function homeLeaveHome() {
    setHomeStyle({ color: "white", transform: "translateY(0px)" });
  }
  let [homeStyleOnline, setOnlineStyle] = useState({
    color: "white",
    transform: "translateY(0px)",
  });
  function homeHoverOnline() {
    setOnlineStyle({
      color: "blue",
      backgroundColor: "white",
      transform: "translateY(-4px)",
      transition: "transform 0.2s ease-in",
    });
  }
  function homeLeaveOnline() {
    setOnlineStyle({ color: "white", transform: "translateY(0px)" });
  }
  let [homeStyleE, setEStyle] = useState({
    color: "white",
    transform: "translateY(0px)",
  });
  function homeHoverE() {
    setEStyle({
      color: "blue",
      backgroundColor: "white",
      transform: "translateY(-4px)",
      transition: "transform 0.2s ease-in",
    });
  }
  function homeLeaveE() {
    setEStyle({ color: "white", transform: "translateY(0px)" });
  }
  let [homeStyleFeatures, setFeaturesStyle] = useState({
    color: "white",
    transform: "translateY(0px)",
  });
  function homeHoverFeatures() {
    setFeaturesStyle({
      color: "blue",
      backgroundColor: "white",
      transform: "translateY(-4px)",
      transition: "transform 0.2s ease-in",
    });
  }
  function homeLeaveFeatures() {
    setFeaturesStyle({ color: "white", transform: "translateY(0px)" });
  }
  let [homeStyleUs, setUsStyle] = useState({
    color: "white",
    transform: "translateY(0px)",
  });
  function homeHoverUs() {
    setUsStyle({
      color: "blue",
      backgroundColor: "white",
      transform: "translateY(-4px)",
      transition: "transform 0.2s ease-in",
    });
  }
  function homeLeaveUs() {
    setUsStyle({ color: "white", transform: "translateY(0px)" });
  }
  function homeClick() {
    setHomeStyle({
      color: "blue",
      backgroundColor: "white",
      transform: "translateY(-4px)",
      transition: "transform 0.2s ease-in",
    });
  }
  function ogClick() {
    setOnlineStyle({
      color: "blue",
      backgroundColor: "white",
      transform: "translateY(-4px)",
      transition: "transform 0.2s ease-in",
    });
  }

  function featureClick() {
    setFeaturesStyle({
      color: "blue",
      backgroundColor: "white",
      transform: "translateY(-4px)",
      transition: "transform 0.2s ease-in",
    });
  }
  function aboutClick() {
    setUsStyle({
      color: "blue",
      backgroundColor: "white",
      transform: "translateY(-4px)",
      transition: "transform 0.2s ease-in",
    });
  }

  // ham

  let [navStyle, setNav] = useState(false);
  window.addEventListener(`scroll`, function () {
    if (window.scrollY >= 18.399999618530273) {
      setNav(true);
    } else {
      setNav(false);
    }
  });
  let [esports, setEsports] = useState(false);
  function clickEsports() {
    setEsports(true);
    setEStyle({
      color: "blue",
      backgroundColor: "white",
      transform: "translateY(-4px)",
      transition: "transform 0.2s ease-in",
    });
  }
  return (
    <nav
      className={
        navStyle
          ? ` navbar active  navbar-expand-lg fixed-top opacity-10`
          : ` navbar  navbar-expand-lg fixed-top opacity-10`
      }
    >
      <div className="container-fluid">
        <img
          src={require("./Assets/logo3.png").default}
          alt="img"
          id="mainlogo"
        />
        <Link className="navbar-brand" style={{ color: `white` }} to="/">
          ZOONOTICS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <div
              id="home"
              onMouseLeave={homeLeaveHome}
              onMouseEnter={homeHoverHome}
            >
              <Link
                className="nav-link active"
                onClick={homeClick}
                style={homeStyleHome}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </div>
            <div
              id="onlineGames"
              onMouseLeave={homeLeaveOnline}
              onMouseEnter={homeHoverOnline}
            >
              <Link
                className="nav-link"
                onClick={ogClick}
                style={homeStyleOnline}
                to="/Cs"
              >
                Online Games
              </Link>
            </div>

            <div
              id="eSports"
              onMouseLeave={homeLeaveE}
              onMouseEnter={homeHoverE}
            >
              <Link
                className="nav-link"
                onClick={clickEsports}
                style={homeStyleE}
                to="/Esports"
              >
                e-Sports
              </Link>
            </div>

            <div
              id="features"
              onMouseLeave={homeLeaveFeatures}
              onMouseEnter={homeHoverFeatures}
            >
              <Link
                className="nav-link "
                onClick={featureClick}
                style={homeStyleFeatures}
                to="/Cs"
              >
                Features
              </Link>
            </div>
            <div
              id="aboutUs"
              onMouseLeave={homeLeaveUs}
              onMouseEnter={homeHoverUs}
            >
              <Link
                className="nav-link "
                style={homeStyleUs}
                onClick={aboutClick}
                to="/About"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
