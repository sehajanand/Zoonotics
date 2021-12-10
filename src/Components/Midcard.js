import React from "react";
import "./Midcard.css";
import { useMediaQuery } from "react-responsive";
export default function Midcard() {
  const lowWidthPhones = useMediaQuery({ query: `(max-width:642px)` });
  const viceVersa = useMediaQuery({ query: `(min-width:643px)` });
  return (
    <>
      {viceVersa && (
        <div className="mid-card">
          <h1>The ALL-IN-ONE Esports Platform</h1>
          <div className="mid-card-achievement">
            <div className="achievement1">
              <div className="achievement-heading">1500+</div>
              <div className="achievement-para">
                tournaments to play per month
              </div>
            </div>
            <div className="achievement2">
              <div className="achievement-heading">78,000+</div>
              <div className="achievement-para">
                {" "}
                pro gaming community and growing
              </div>
            </div>
            <div className="achievement3">
              <div className="achievement-heading">3000$+</div>
              <div className="achievement-para">
                {" "}
                worth prizepool and rewards to winners
              </div>
            </div>
            <div className="achievement4">
              <div className="achievement-heading">300+</div>
              <div className="achievement-para">
                mods and employees to solve your problems
              </div>
            </div>
          </div>
          <h2 id="a">Join Our Pro Gang</h2>
          <div className="community-links">
            <a
              href="https://discord.gg/wbuHk8fqZT"
              className="discord-link"
            ></a>
            <a
              href="https://www.instagram.com/zoonotics/"
              className="insta-link"
            ></a>
            <a
              href="https://www.facebook.com/Zoonotics"
              className="facebook-link"
            ></a>
            <a
              href="https://www.linkedin.com/in/abhishek-kumar-singh-b2803520a/"
              className="linkden-link"
            ></a>
          </div>
        </div>
      )}
      {lowWidthPhones && (
        <div className="mid-card-low-width">
          <h1>The ALL-IN-ONE Esports Platform</h1>
          <div className="achievement1-low-width">
            <div className="achievement-heading-low-width">1500+</div>
            <div className="achievement-para-low-width">
              tournaments to play per month
            </div>
          </div>
          <div className="achievement2-low-width">
            <div className="achievement-heading-low-width">78,000+</div>
            <div className="achievement-para-low-width">
              pro gaming community and growing
            </div>
          </div>
          <div className="achievement3-low-width">
            <div className="achievement-heading-low-width">3000$+</div>
            <div className="achievement-para-low-width">
              worth prizepool and rewards to winners
            </div>
          </div>
          <div className="achievement4-low-width">
            <div className="achievement-heading-low-width">300+</div>
            <div className="achievement-para-low-width">
              mods and employees to solve your problems
            </div>
          </div>

          <div className="community-links">
            <a
              href="https://discord.gg/wbuHk8fqZT"
              className="discord-link"
            ></a>
            <a
              href="https://www.instagram.com/zoonotics/"
              className="insta-link"
            ></a>
            <a
              href="https://www.facebook.com/Zoonotics"
              className="facebook-link"
            ></a>
            <a
              href="https://www.linkedin.com/in/abhishek-kumar-singh-b2803520a/"
              className="linkden-link"
            ></a>
          </div>
        </div>
      )}
    </>
  );
}
//642
