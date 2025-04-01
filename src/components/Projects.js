import React, { useEffect, useState } from "react";
import "../projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Erro ao carregar projetos:", error));
  }, []);

  return (
    <section id="projects">
      <h2>Meus Projetos</h2>
      <div className="projects-container">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                Ver Projeto
              </a>
            </div>
          ))
        ) : (
          <p>Carregando projetos...</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
