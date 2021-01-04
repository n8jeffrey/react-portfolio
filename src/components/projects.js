import React, { Component } from "react";
import ProjectCard from "./projectcard";

class Projects extends Component {
  render() {
    return (
      <div className="project-section">
        <div className="project-banner">
          <img
            className="project-banner-image"
            alt="flat banner"
            src={"https://i.imgur.com/EYBakDe.png"}
          />
        </div>
        <h2>Recent Projects</h2>
        <ProjectCard />
      </div>
    );
  }
}

export default Projects;
