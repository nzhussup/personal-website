import React, { useState, useEffect } from "react";
import codeIcon from "../assets/code.svg";
import projectsData from "../config/projects.json";

const Projects = () => {
  const [projectDetails, setProjectDetails] = useState([]);

  // Function to fetch the repository metadata (including the description)
  const fetchRepoDescription = async (url) => {
    const repoName = url.split("/").slice(-2).join("/");
    const repoUrl = `https://api.github.com/repos/${repoName}`;
    const token = import.meta.env.VITE_GITHUB_TOKEN;

    if (!token) {
      console.error("GitHub token not available.");
      return "GitHub token not available.";
    }

    try {
      const response = await fetch(repoUrl, {
        headers: {
          Authorization: `token ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.statusText}`);
      }

      const data = await response.json();
      if (data.description) {
        return data.description;
      }
      return "No description available.";
    } catch (error) {
      console.error("Error fetching repository description:", error);
      return "Failed to fetch repository description.";
    }
  };

  // Function to fetch all project details and descriptions
  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await Promise.all(
        Object.keys(projectsData).map(async (projectName) => {
          const project = projectsData[projectName];
          const description = await fetchRepoDescription(project.URL);
          return {
            name: projectName,
            description: description,
            url: project.URL,
            techStack: project["Tech Stack"] || [],
          };
        })
      );
      setProjectDetails(projects);
    };
    fetchProjects();
  }, []);

  return (
    <div className='container px-4 py-5' id='hanging-icons'>
      <h2 className='pb-2 border-bottom'>Projects</h2>
      <div className='row g-4 py-5 row-cols-1 row-cols-sm-2 row-cols-md-2'>
        {projectDetails.map((project, index) => (
          <div className='col d-flex align-items-start' key={index}>
            <div className='icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3'>
              <img src={codeIcon} alt='Code Icon' />
            </div>
            <div>
              <h3 className='fs-2 text-body-emphasis'>{project.name}</h3>
              <p>{project.description}</p>
              <div className='d-flex flex-wrap gap-2 mt-2'>
                {Array.isArray(project.techStack) &&
                project.techStack.length > 0 ? (
                  project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className='badge bg-light text-muted rounded-pill'
                      style={{ fontSize: "14px" }}
                    >
                      {tech}
                    </span>
                  ))
                ) : (
                  <span
                    className='badge bg-light text-muted rounded-pill'
                    style={{ fontSize: "14px" }}
                  >
                    No tech stack available
                  </span>
                )}
              </div>
              <a href={project.url} className='btn btn-dark mt-3'>
                visit the source code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
