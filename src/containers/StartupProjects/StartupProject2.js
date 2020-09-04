import React from "react";
import "./StartupProjects2.css";
import { bigProjects2 } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">{bigProjects2.title}</h1>
        <p className="subTitle project-subtitle">{bigProjects2.subtitle}</p>
        <div className="startup-projects-main">
          <div className="startup-project-text">
            {bigProjects2.projects.map(project => {
              return (
                <div className="saaya-health-div" onClick={() => openProjectInNewWindow(project.link)}>
                  <img alt="Saad Working" src={project.image}></img>
                </div>
              );
            })}
          </div>
          <div className="starup-project-image"></div>
        </div>
      </div>
    </div>
    </Fade>
  );
}
