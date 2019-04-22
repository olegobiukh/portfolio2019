import React from "react";
import { Slide, Zoom } from "react-reveal";

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
          <div className="Skill">
            <Zoom top>
              <span className="Skill__item Skill__item-html" title="HTML5" />
            </Zoom>
            <Zoom right>
              <span className="Skill__item Skill__item-css" title="CSS3" />
            </Zoom>
            <Zoom top>
              <span className="Skill__item Skill__item-sass" title="SASS" />
            </Zoom>
            <Zoom right>
              <span
                className="Skill__item Skill__item-bootstrap"
                title="Bootstrap"
              />
            </Zoom>
            <Zoom top>
              <span className="Skill__item Skill__item-gulp" title="Gulp" />
            </Zoom>
            <Zoom right>
              <span className="Skill__item Skill__item-js" title="JS" />
            </Zoom>
            <Zoom top>
              <span className="Skill__item Skill__item-jquery" title="jQuery" />
            </Zoom>
            <Zoom right>
              <span className="Skill__item Skill__item-react" title="React" />
            </Zoom>
            <Zoom top>
              <span className="Skill__item Skill__item-redux" title="Redux" />
            </Zoom>
            <Zoom right>
              <span className="Skill__item Skill__item-git" title="Git" />
            </Zoom>
            <Zoom top>
              <span className="Skill__item Skill__item-npm" title="NPM" />
            </Zoom>
            <Zoom right>
              <span
                className="Skill__item Skill__item-photoshop"
                title="Photoshop"
              />
            </Zoom>
            <Zoom top>
              <span className="Skill__item Skill__item-figma" title="Figma" />
            </Zoom>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
