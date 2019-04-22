import React from "react";

import { Bounce, Flip } from "react-reveal";

function Header() {
  return (
    <header className="Header " id="home">
      <div className="Header__background container">
        <div className="Header__box">
          <Bounce top cascade>
            <h1 className="Header__title">Hello, I'm Oleg Obiukh</h1>
          </Bounce>
          <Flip>
            <p className="Header__text">Front end (JS / React) developer</p>
          </Flip>
        </div>
      </div>
    </header>
  );
}

export default Header;
