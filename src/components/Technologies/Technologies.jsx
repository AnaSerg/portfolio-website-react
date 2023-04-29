import React from 'react';
import SectionTitle from "../SectionTitle/SectionTitle";
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
        <div className="techs">
            <SectionTitle title="стек" />
            <ul className="techs__list">
                {techs.map((tech) =>
                    <li className="element">{tech}</li>
                )}
            </ul>
        </div>
    );
};

export default Technologies;
