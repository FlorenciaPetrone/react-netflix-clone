//React
import React from "react";
//Styles
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-container">
        <a href="https://github.com/FlorenciaPetrone" target="_blank">
          <i class="fab fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/florencia-petrone/"
          target="_blank"
        >
          <i class="fab fa-linkedin" />
        </a>
      </div>
      <div className="copyright">
        <p>© 2021 Petrone Florencia. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
