import React,{useState} from "react";
// import { useState } from "react/cjs/react.development";
import "./Cards2.css";

export default function Cards2() {
  let [card1Style, setStyle1] = useState({
    width: `18rem`,
    transform: `translateY(0px)`,
  });
  function mouseEnter1() {
    setStyle1({
      width: `18rem`,
      // borderColor: `transparent`,
      // borderTopColor: `#00bbcb`,
      // borderWidth:`2px`,
      // borderStyle:`solid`,
      // borderBottomColor: `#62cb5c`,
      // borderLeftColor: `#ab79d6`,
      // borderRightColor: `#c5c5ce`,
      transform: `translateY(-7px)`,
      border: `2px solid lime`,
    });
  }
  function mouseLeave1() {
    setStyle1({
      width: `18rem`,
      transform: `translateY(0px)`,
    });
  }
  let [card1Style2, setStyle2] = useState({
    width: `18rem`,
    transform: `translateY(0px)`,
  });
  function mouseEnter2() {
    setStyle2({
      width: `18rem`,
      // borderColor: `transparent`,
      // borderTopColor: `#00bbcb`,
      // borderWidth:`2px`,
      // borderStyle:`solid`,
      // borderBottomColor: `#62cb5c`,
      // borderLeftColor: `#ab79d6`,
      // borderRightColor: `#c5c5ce`,
      transform: `translateY(-7px)`,
      border: `2px solid lime`,
    });
  }
  function mouseLeave2() {
    setStyle2({
      width: `18rem`,
      transform: `translateY(0px)`,
    });
  }
  let [card1Style3, setStyle3] = useState({
    width: `18rem`,
    transform: `translateY(0px)`,
  });
  function mouseEnter3() {
    setStyle3({
      width: `18rem`,
      // borderColor: `transparent`,
      // borderTopColor: `#00bbcb`,
      // borderWidth:`2px`,
      // borderStyle:`solid`,
      // borderBottomColor: `#62cb5c`,
      // borderLeftColor: `#ab79d6`,
      // borderRightColor: `#c5c5ce`,
      transform: `translateY(-7px)`,
      border: `2px solid lime`,
    });
  }
  function mouseLeave3() {
    setStyle3({
      width: `18rem`,
      transform: `translateY(0px)`,
    });
  }
  let [card1Style4, setStyle4] = useState({
    width: `18rem`,
    transform: `translateY(0px)`,
  });
  function mouseEnter4() {
    setStyle4({
      width: `18rem`,
      // borderColor: `transparent`,
      // borderTopColor: `#00bbcb`,
      // borderWidth:`2px`,
      // borderStyle:`solid`,
      // borderBottomColor: `#62cb5c`,
      // borderLeftColor: `#ab79d6`,
      // borderRightColor: `#c5c5ce`,
      transform: `translateY(-7px)`,
      border: `2px solid lime`,
    });
  }
  function mouseLeave4() {
    setStyle4({
      width: `18rem`,
      transform: `translateY(0px)`,
    });
  }
  function rlClick() {
    setStyle1({
      width: `18rem`,
      lightColor: `#c5c5ce`,
      transform: `translateY(-7px)`,
      border: `2px solid lime`,
    });
  }
  function bgmiClick() {
    setStyle2({
      width: `18rem`,
      lightColor: `#c5c5ce`,
      transform: `translateY(-7px)`,
      border: `2px solid lime`,
    });
  }
  function codClick() {
    setStyle3({
      width: `18rem`,
      lightColor: `#c5c5ce`,
      transform: `translateY(-7px)`,
      border: `2px solid lime`,
    });
  }
  function ffClick() {
    setStyle4({
      width: `18rem`,
      lightColor: `#c5c5ce`,
      transform: `translateY(-7px)`,
      border: `2px solid lime`,
    });
  }
  return (
    <div className="cardsBox">
      <div className="box1">
        <div
          className="card"
          onMouseLeave={mouseLeave1}
          onMouseEnter={mouseEnter1}
          style={card1Style}
        >
          <div id="card1img"></div>
          <div className="card-body">
            <h5 className="card-title">Rocket League</h5>
            <p className="card-text">
              <i className="bi bi-award"></i>
              &#x20B9;2000.
            </p>
            <a
              href="https://zoonotics.iscrim.com/"
              onClick={rlClick}
              className="btn btn-primary"
            >
              <i className="bi bi-calendar"></i>29/12/21
            </a>
          </div>
        </div>
      </div>
      {/* here */}
      <div className="box1">
        <div
          className="card"
          onMouseLeave={mouseLeave2}
          onMouseEnter={mouseEnter2}
          style={card1Style2}
        >
          <div id="card1img2"></div>
          <div className="card-body">
            <h5 className="card-title">BGMI</h5>
            <p className="card-text">
              <i className="bi bi-award"></i>&#x20B9;3000
            </p>
            <a
              href="https://zoonotics.iscrim.com/"
              onClick={bgmiClick}
              className="btn btn-primary"
            >
              <i className="bi bi-calendar"></i>30/11/21
            </a>
          </div>
        </div>
        {/* here */}
      </div>
      <div className="box1">
        <div
          className="card"
          onMouseLeave={mouseLeave3}
          onMouseEnter={mouseEnter3}
          style={card1Style3}
        >
          <div id="card1img3"></div>
          <div className="card-body">
            <h5 className="card-title">Call Of Duty Mobile</h5>
            <p className="card-text">
              <i className="bi bi-award"></i>&#x20B9;5000
            </p>
            <a
              href="https://zoonotics.iscrim.com/"
              onClick={codClick}
              className="btn btn-primary"
            >
              <i className="bi bi-calendar"></i>33/11/21
            </a>
          </div>
        </div>
        {/* here */}
      </div>
      <div className="box1">
        <div
          className="card"
          onMouseLeave={mouseLeave4}
          onMouseEnter={mouseEnter4}
          style={card1Style4}
        >
          <div id="card1img4"></div>
          <div className="card-body">
            <h5 className="card-title">Free Fireeeeeeee</h5>
            <p className="card-text">
              <i className="bi bi-award"></i>&#x20B9;0.1111
            </p>
            <a
              href="https://zoonotics.iscrim.com/"
              onClick={ffClick}
              className="btn btn-primary"
            >
              <i className="bi bi-calendar"></i>11/11/11
            </a>
          </div>
        </div>
        {/* here */}
      </div>
    </div>
  );
}
