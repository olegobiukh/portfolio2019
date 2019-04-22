import React from "react";

import { Slide } from "react-reveal";

function Footer() {
  return (
    <footer className="Footer" id="contacts">
      <div className="wrapper container">
        <Slide bottom>
          <div className="Footer__social container ">
            <a
              href="https://github.com/olegobiukh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-square" />
            </a>
            <a
              href="https://www.linkedin.com/in/oleg-obiukh-237362139/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </Slide>

        <div className="Footer__text">
          <Slide bottom>
            <p>+38 (099) 531 39 54</p>
            <p>oleg.obiukh@gmail.com</p>
            <p>Oleg Obiukh ©2019</p>
          </Slide>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
