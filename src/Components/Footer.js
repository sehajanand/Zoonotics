import React from "react";
import "./Footer.css";
export default function Footer() {
  const backtotopClick = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
      left: 0,
    });
  };
  return (
    <footer>
      <div onClick={backtotopClick} title="Back to top" className="back-to-top">
        <img
          src={require("./Assets/backtotop.png").default}
          alt="Back to top"
        />
      </div>
      <div className="footer-copyright">Copyright &copy; Zoonotics </div>
      <div className="footer-social-links">
        <a href="https://discord.gg/wbuHk8fqZT">
          <img src={require("./Assets/dc.jpg").default} alt="discord" />
        </a>
        <a href="https://www.linkedin.com/in/abhishek-kumar-singh-b2803520a/">
          <img src={require("./Assets/linkden3.png").default} alt="linkden" />
        </a>
        <a href="https://www.facebook.com/Zoonotics">
          <img src={require("./Assets/facebook.png").default} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/zoonotics/">
          <img src={require("./Assets/insta.webp").default} alt="insta" />
        </a>
      </div>
      <div className="other-contact-details">
        Mail To:{" "}
        <a
          href="mailto:          officialzoonotics@gmail.com
  "
        >
          {" "}
          officialzoonotics@gmail.com
        </a>{" "}
      </div>
    </footer>
  );
}
