import React from "react";

import { Fade, Slide } from "react-reveal";

function About() {
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
                development. I have extensive knowledge of HTML/CSS, Javascript
                and React. I am thorough and precise in everything I do, and
                have a keen interest in technology, mobile applications and user
                experience.
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
          <div className="Skills__container">
            <div className="Skills__Item container">
              <Fade left>
                <span className="Skills__title Skills__title-html">html</span>
              </Fade>
              <span>80%</span>
            </div>
            <div className="Skills__Item container">
              <Fade left>
                <span className="Skills__title Skills__title-css">css</span>
              </Fade>
              <span>70%</span>
            </div>
            <div className="Skills__Item container">
              <Fade left>
                <span className="Skills__title Skills__title-js">js</span>
              </Fade>
              <span>60%</span>
            </div>
            <div className="Skills__Item container">
              <Fade left>
                <span className="Skills__title Skills__title-react">react</span>
              </Fade>
              <span>50%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
