import React from 'react';

function ProjectItem(props) {
    
    let link;
    if (props.project.link) {
        link = <a href={props.project.link} target='_blank' rel="noreferrer"> look it</a>
     }

    return (
        <div className='project'>
                <img 
                    src={props.project.image} 
                    alt="project-img" 
                />               
                <div className='project__top'>
                    <h2 className="project__title">
                        {props.project.name}
                    </h2>
                    <div className="project__links">
                        {link}
                        <a href={props.project.code} target='_blank' rel="noreferrer"> Code</a>
                    </div>
                </div>
                <p className="project__text">
                    {props.project.description}
                </p>
                <p className='technologies__title'>Technologies :</p>
                <ul className="technologies">
                    {
                        props.project.technologies.map((technologi) => {
                            return ( 
                                <li className="tecjnologies__item" key={technologi}>
                                    {technologi}
                                </li>
                            )
                        })
                    }
                </ul>
                
            </div>
    );
}

export default ProjectItem;