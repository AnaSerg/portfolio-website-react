import React from 'react';
import './ProjectCard.scss';
import TechElement from "../TechElement/TechElement";

const ProjectCard = ({project}) => {
    return (
        <div className="project-card">
            <img className="project-card__image" src={project.image}/>
            <div className="project-card__info">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__paragraph">{project.smallDescription}</p>
                <ul className="project-card__techs-list">
                    {project.techs.map((tech) =>
                        <TechElement title={tech} classes="tech-element tech-element_location_card"/>
                    )}
                </ul>
                <a target="_blank" href={project.link} className="project-card__button project-card__button_website">Сайт</a>
                <a target="_blank" href={project.githubLink} className="project-card__button project-card__button_github">Github</a>
            </div>
        </div>
    );
};

export default ProjectCard;
