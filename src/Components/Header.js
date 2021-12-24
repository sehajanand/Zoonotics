import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
export default function Header() {
  return (
    <>
      <header className="carousel-header">
        <Navbar />
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" style={{ height: `99vh` }}>
              <img
                src={require("./Assets/sliderimg2.jpg").default}
                className="d-block sliderImg2 w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" style={{ height: `99vh` }}>
              <img
                src={require("./Assets/istockphoto-1320158002-170667a.jpg").default}
                className="d-block sliderImg2 w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" style={{ height: `99vh` }}>
              <img
                src={require("./Assets/sliderimg3.jpg").default}
                className="d-block sliderImg2 w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" style={{ height: `99vh` }}>
              <img
                src={
                  require("./Assets/sliderimg1.jpg").default
                }
                className="d-block sliderImg2 w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div id="grad"></div>
      </header>
    </>
  );
}
