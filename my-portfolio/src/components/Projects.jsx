import React from 'react'

export default function Projects() {
    const projects = [
        {   id: 1,
            title: "Project One",
            description: "A brief description of Project One.",
            link: "github/project1",
        },
        {   id: 2, 
            title: "Project Two",
            description: "A brief description of Project Two.",
            link: "github/project2",
        },
        {   id: 3,
            title: "Project Three",
            description: "A brief description of Project Three.",
            link: "github/project3",
        }
        ]
  return (
    <section id="projects">
        <h2>My Projects</h2>
        <div>
            {projects.map((project) => (
                <div key={project.id}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            ))}
        </div>
    </section>
  )
}
