import React from "react";
import "./Esports.css";

export default function Esports() {
  return (
    <>
      <div className="esports">
        <div className="box1-esports">
          <p> DISPLAY YOUR SKILLS</p>
        </div>
        <div className="box2-esports">
          <a
            class="btn btn-primary"
            id="esports-page-btn"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            Explore
          </a>
          <p>PLAY OUR TOURNAMENTS</p>
        </div>
      </div>

      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            We regularly organize tournaments for you
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div>
            Display your skills by playing and winning tournaments in
            Battlegrounds Mobile India,Free Fire,Valorent,and many more...
          </div>
          <div class="dropdown mt-3">
            <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
            >
              Select Game
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a class="dropdown-item " href="https://zoonotics.iscrim.com/">
                  Battlegrounds Mobile India
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="https://zoonotics.iscrim.com/">
                  Free Fire
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="https://zoonotics.iscrim.com/">
                  Valorent
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="https://zoonotics.iscrim.com/">
                  Other
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
