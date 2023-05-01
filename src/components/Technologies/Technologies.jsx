import React from 'react';
import SectionTitle from "../SectionTitle/SectionTitle";
import TechElement from "../TechElement/TechElement";
import './Technologies.scss';

const Technologies = () => {
    const techs = [
        'React.js',
        'CSS3',
        'HTML5',
        'Javascript',
        'git',
        'webpack',
        'Sass',
        'Express.js',
        'MongoDB',
        'Node.js',
        'TypeScript',
        'npm',
        'БЭМ',
        'Figma',
        'Rest API',
    ]

    return (
        <div id="techs" className="techs">
            <SectionTitle title="стек" />
            <ul className="techs__list">
                {techs.map((tech) =>
                    <TechElement title={tech} classes="tech-element"/>
                )}
            </ul>
        </div>
    );
};

export default Technologies;
