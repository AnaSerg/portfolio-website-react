import React from 'react';
import './TechElement.scss';

const TechElement = ({title}) => {
    return (
        <li className="tech-element">
            {title}
        </li>
    );
};

export default TechElement;
