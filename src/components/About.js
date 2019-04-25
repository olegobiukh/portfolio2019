import React, { Component } from "react";
import { Slide, Zoom } from "react-reveal";

class About extends Component {
  state = {
    skills: null
  };

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/olegobiukh/other/master/portfolio/obiukh-portfolio-api.json"
    )
      .then(res => res.json())
      .then(data => this.setState({ skills: data.skills }));
  }

  render() {
    const { skills } = this.state;
    return (
      <section className="About" id="about">
        <div className="About__background">
          <div className="wrapper container">
            <Slide left>
              <div className="About__container">
                <h2 className="About__title">About me</h2>
                <p className="About__text">
                  I am a result and process oriented person with strong
                  theoretical background and good practical experience in Web
                  development. I have extensive knowledge of HTML/CSS,
                  Javascript and React. I am thorough and precise in everything
                  I do, and have a keen interest in technology, mobile
                  applications and user experience.
                </p>
                <a
                  className="About__link"
                  href="https://raw.githubusercontent.com/olegobiukh/other/master/portfolio/resume/olegobiukh_resume.pdf"
                  download
                >
                  <i className="fas fa-download"> Download resume</i>
                </a>
              </div>
            </Slide>
            <div className="Skill">
              {skills &&
                skills.map(item => {
                  const iconstyle = {
                    backgroundImage: `url(https://raw.githubusercontent.com/olegobiukh/other/master/portfolio/background/skills/${item}.png)`
                  };

                  return (
                    <Zoom top key={item}>
                      <span
                        style={iconstyle}
                        className="Skill__item"
                        title={item.toUpperCase()}
                      />
                    </Zoom>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
