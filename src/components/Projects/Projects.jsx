import React from 'react';
import {projects} from '../../utils/constants';
import './Projects.scss';
import ProjectCard from "../ProjectCard/ProjectCard";
import SectionTitle from "../SectionTitle/SectionTitle";

const Projects = () => {

    return (
        <div id="projects" className="projects">
            <SectionTitle title="проекты" />
            <p className="projects__subtitle">Подробное описание проекта можно посмотреть на Github :)</p>
            <ul className="projects__list">
                {projects.map((project) =>
                    <ProjectCard project={project} />
                )}
            </ul>
        </div>
    );
};

export default Projects;
