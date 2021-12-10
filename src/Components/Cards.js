import React from "react";
import { useState } from "react/cjs/react.development";
import "./Cards.css";
export default function Cards() {
  let [cardStyle1, setStyle1] = useState({
    margin: `73px 16px`,
    borderRadius: `98px`,
  });
  let [cardStyle2, setStyle2] = useState({
    margin: `44px 16px`,
    borderRadius: `98px`,
    transform: `translateY(0px)`,
  });
  function cardBoxMouseEnter1() {
    setStyle1({
      margin: `73px 16px`,
      borderRadius: `98px`,
      border: `2px solid lime`,
    });
  }
  function cardBoxMouseLeave1() {
    setStyle1({ margin: `73px 16px`, borderRadius: `98px` });
  }
  function cardBoxMouseEnter2() {
    setStyle2({
      margin: `44px 16px`,
      borderRadius: `98px`,
      border: `2px solid lime`,
      transition: `transform 2s ease-in`,
    });
  }
  function cardBoxMouseLeave2() {
    setStyle2({ margin: `44px 16px`, borderRadius: `98px` });
  }

  return (
    <div className="cardsBox">
      <div
        className="cardBorder"
        onMouseEnter={cardBoxMouseEnter1}
        onMouseLeave={cardBoxMouseLeave1}
        style={cardStyle1}
      >
        <div className="card" style={{ width: ` 18rem` }}>
          <img
            src={require("./Assets/card1.png").default}
            className="card-img-top"
            alt="imgnotloaded"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div
        className="cardBorder"
        style={cardStyle2}
        onMouseEnter={cardBoxMouseEnter2}
        onMouseLeave={cardBoxMouseLeave2}
      >
        <div className="card" style={{ width: `18rem` }}>
          <img
            src={require("./Assets/card2.png").default}
            className="card-img-top"
            alt="imgnotloaded"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      {/* hehe */}
    </div>
  );
}
