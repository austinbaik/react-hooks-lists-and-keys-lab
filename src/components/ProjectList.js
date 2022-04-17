import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const ProjectId = projects.map((project) => {
    return <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies}/>
  });
  console.log(ProjectId)
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {ProjectId}
      </div>
    </div>
  );
}

export default ProjectList;
