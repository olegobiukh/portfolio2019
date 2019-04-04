import React from "react";

function Footer() {
  return (
    <footer className="Footer" id="contacts">
      <div className="wrapper container">
        <div className="Footer__social container ">
          <a
            href="https://github.com/olegobiukh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/oleg-obiukh-237362139/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" />
          </a>
        </div>
        <div className="Footer__text">
          <p>+38 (099) 531 39 54</p>
          <p>oleg.obiukh@gmail.com</p>
          <p>Oleg Obiukh ©2019</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
