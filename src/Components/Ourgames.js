import React from "react";
import "./Ourgames.css";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Ourgames() {
  const moreWidth = useMediaQuery({
    query: `(min-width:647px) and (max-width:858px)`,
  });
  const lowWidthDevices = useMediaQuery({ query: `(max-width:646px)` });
  const normal = useMediaQuery({ query: `(min-width:859px)` });
  let [sub11Style, setsub11Style] = useState({});
  function sub11click() {
    setsub11Style({ border: `2px solid lime` });
  }
  return (
    <>
      {normal && (
        <div className="our-games-card">
          <h1>Games We Currently Work On</h1>
          <div className="our-games-sub-1">
            {" "}
            <a
              href="https://zoonotics.iscrim.com/"
              style={sub11Style}
              onClick={sub11click}
              className="game-sub1-1"
            ></a>
            <a href="https://zoonotics.iscrim.com/" className="game-sub1-2"></a>
            <a href="https://zoonotics.iscrim.com/" className="game-sub1-3"></a>
          </div>
          <div className="our-games-sub-2">
            <a href="https://zoonotics.iscrim.com/" className="game-sub2-1"></a>
            <a href="https://zoonotics.iscrim.com/" className="game-sub2-2"></a>
            <a href="https://zoonotics.iscrim.com/" className="game-sub2-3"></a>
          </div>
        </div>
      )}
      {moreWidth && (
        <div className="our-games-card">
          <h1>Games We Currently Work On</h1>
          <div className="our-games-sub-1">
            {" "}
            <a
              href="https://zoonotics.iscrim.com/"
              className="game-sub1-1-media"
            ></a>
            <a
              href="https://zoonotics.iscrim.com/"
              className="game-sub1-2-media"
            ></a>
            <a
              href="https://zoonotics.iscrim.com/"
              className="game-sub1-3-media"
            ></a>
          </div>
          <div className="our-games-sub-2">
            <a
              href="https://zoonotics.iscrim.com/"
              className="game-sub2-1-media"
            ></a>
            <a
              href="https://zoonotics.iscrim.com/"
              className="game-sub2-2-media"
            ></a>
            <a
              href="https://zoonotics.iscrim.com/"
              className="game-sub2-3-media"
            ></a>
          </div>
        </div>
      )}
      {lowWidthDevices && (
        <div className="our-games-card">
          <h1>Games We Currently Work On</h1>
          <div className="our-games-sub-1">
            {" "}
            <a
              href="https://zoonotics.iscrim.com/"
              className="game-sub1-1-media2"
            ></a>
            <a
              href="https://zoonotics.iscrim.com/"
              className="game-sub1-2-media2"
            ></a>
            <a
              href="https://zoonotics.iscrim.com/"
              className="game-sub1-3-media2"
            ></a>
          </div>
          <div className="our-games-sub-2">
            <a
              href="https://zoonotics.iscrim.com/"
              className="game-sub2-1-media2"
            ></a>
            <a
              href="https://zoonotics.iscrim.com/"
              className="game-sub2-2-media2"
            ></a>
            <a
              href="https://zoonotics.iscrim.com/"
              className="game-sub2-3-media2"
            ></a>
          </div>
        </div>
      )}
    </>
  );
}
