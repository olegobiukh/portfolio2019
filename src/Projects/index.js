import React, { Component } from "react";

import { Zoom, Bounce } from "react-reveal";

// import config from "../config";
import Toolbar from "./components/Toolbar";

class Projects extends Component {
  state = {
    data: [],
    title: "all"
  };

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/olegobiukh/other/master/portfolio/obiukh-portfolio-api.json"
    )
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  handleClick = title => {
    this.setState({ title });
  };

  render() {
    const { title, data } = this.state;
    let items = [];

    if (data) {
      items =
        title === "all"
          ? data.projects
          : data.projects.filter(item => item.tech === title);
    }

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
                {items &&
                  items.map(item => {
                    return (
                      <Zoom key={item.view}>
                        <div className="card-container">
                          <div className="card">
                            <div
                              style={{ backgroundImage: `url(${item.img})` }}
                              className={`side bgColor__${item.tech}`}
                            />
                            <div className="side back">
                              <h2 className="card__title">
                                <a
                                  href={item.view}
                                  target="_blank"
                                  rel="noopener noreferrer"
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
                      </Zoom>
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
