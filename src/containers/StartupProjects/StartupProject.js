import React from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
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
        <h1 className="skills-heading">Et en <span>image</span> ça donne ça !</h1>
        <div className="startup-projects-main">
            {bigProjects.projects.map(project => {
              return (
                <div className="saaya-health-div" onClick={() => openProjectInNewWindow(project.link)}>
                  <img alt="Saad Working" src={project.image}></img>
                </div>
              );
            })}
          <div className="starup-project-image"></div>
        </div>
      </div>
    </div>
    </Fade>
  );
}
