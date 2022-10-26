import React from 'react';
import ProjectItem from './ProjectItem/ProjectItem';
import './Projects.css'


function Projects(props) {
    return (
        <div className='projects'>
                {props.projects.map((project) => {
                    return (
                        <ProjectItem project={project} key={project.name}/>
                    )
                })}
                
        </div>
    );
}

export default Projects;