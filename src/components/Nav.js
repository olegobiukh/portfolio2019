import React from "react";

function Nav() {
  return (
    <>
      <input type="checkbox" id="burger" className="burger" />
      <label htmlFor="burger" className="burger-icon">
        <span />
        <span />
        <span />
      </label>

      <nav className="nav">
        <div className="nav__wrapper">
          <ul className="nav__menu">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                about
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">
                projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#contacts" className="nav__link">
                contacts
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
