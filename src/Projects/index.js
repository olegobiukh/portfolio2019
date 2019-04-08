import React, { Component } from "react";

import { Zoom, Bounce } from "react-reveal";

import config from "../config";
import Toolbar from "./components/Toolbar";

class Projects extends Component {
  state = {
    title: "all"
  };

  handleClick = title => {
    this.setState({ title });
  };

  render() {
    const { title } = this.state;
    const items =
      title === "all"
        ? config.projects
        : config.projects.filter(item => item.tech === title);

    return (
      <section className="Projects" id="projects">
        <div className="Projects__background">
          <div className="wrapper">
            <Bounce top cascade>
              <h2 className="Projects__title">Projects</h2>
            </Bounce>
            <Zoom>
              <Toolbar handleClick={this.handleClick} />
            </Zoom>
            <div className="Projects__box grids">
              <>
                {items.map(item => {
                  return (
                    <div key={item.name} className="card-container">
                      <div className="card">
                        <div
                          className={`side ${item.img} bgColor__${item.tech}`}
                        />
                        <div className="side back">
                          <h2 className="card__title">
                            <a
                              href={item.view}
                              target="_blank"
                              className="card__link"
                            >
                              {item.name}
                            </a>
                            <br />
                            <span className="card__additional-info">
                              {item["additional info"]}
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
