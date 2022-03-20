import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import { projectsHeader, projects } from "../../portfolio.js";
import "./Projects.css";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import ProjectsImg from "./ProjectsImg";
import { style } from "glamor";
import ReactGA from "react-ga";

function Projects(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
    marginTop: "15px",
  });

  const card_styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: "pointer",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

  return (
    <div className="projects-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="repo-cards-div-main">
        {projects.data.map((project, idx) => (
          <Fade bottom duration={2000} distance="40px">
            <div
              {...card_styles}
              style={{ backgroundColor: theme.projectCard }}
            >
              <a
                key={idx}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  ReactGA.event({
                    category: `${project.category}`,
                    action: `${project.action}`,
                  });
                }}
                style={{ textDecoration: "none" }}
              >
                <div className="repo-name-div">
                  <p className="repo-name" style={{ color: theme.text }}>
                    {project.name}
                  </p>
                </div>
                <p className="repo-description" style={{ color: theme.text }}>
                  {project.description}
                </p>
                <div className="repo-details">
                  <ProjectLanguages logos={project.languages} />
                </div>
              </a>
            </div>
          </Fade>
        ))}
      </div>
      <br />
      <br />
      <br />
      <a
        {...styles}
        className="general-btn"
        href="https://github.com/Derimarg"
        target="_blank"
        rel="noopener noreferrer"
      >
        More Projects (Github)
      </a>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Projects;
