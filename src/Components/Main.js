import React from "react";
import Cards2 from "./Cards2.js";
import "./Main.css";
import Midcard from "./Midcard.js";
import Ourgames from "./Ourgames.js";

export default function Main() {
  return (
    <>
      {/* // create linear gradeint of images */}
      <div className="sub-heading-before-card">
        <div className="card-sub-heading">Particitpate in our </div>
        <h1>T O U R N A M E N T S</h1>
      </div>
      <Cards2 />
      <Ourgames />
      <Midcard />
    </>
  );
}
