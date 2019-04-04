import React from "react";

function Header() {
  return (
    <header className="Header " id="home">
      <div className="Header__background container">
        <div className="Header__box">
          <h1 className="Header__title">Hello, I'm Oleg Obiukh</h1>
          <p className="Header__text">Front end (JS / React) developer</p>
          <a className="Header__link" href="#projects">
            View my work
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
