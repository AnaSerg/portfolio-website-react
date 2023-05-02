import React from 'react';
import './SectionTitle.scss';

const SectionTitle = ({title, burgerMenuOpened}) => {
    return <h2 className={!burgerMenuOpened ? "section__title section__title_menu_closed" : "section__title"}><span className="section__title-circle"/>{title}</h2>;
};

export default SectionTitle;
