import React from 'react';
import SectionTitle from "../SectionTitle/SectionTitle";
import {aboutInfo} from "../../utils/constants";
import './AboutMe.scss';
import AboutMeParagraph from "../AboutMeParagraph/AboutMeParagraph";

const AboutMe = () => {
    return (
        <div className="about">
            <SectionTitle title="обо мне" />
            <ul className="about__list">
                {aboutInfo.map((info) =>
                    <AboutMeParagraph title={info.title} text={info.text} />
                )}
            </ul>
        </div>
    );
};

export default AboutMe;
