import React from 'react';
import SectionTitle from "../SectionTitle/SectionTitle";
import './Contacts.scss';

const Contacts = () => {
    return (
        <div className="contacts">
            <SectionTitle title="контакты" />
            <ul className="contacts__list">
                <li className="contacts__list-item">
                    <a className="contacts__item-link">Telegram</a>
                </li>
                <li className="contacts__list-item">
                    <a className="contacts__item-link">WhatsApp</a>
                </li>
                <li className="contacts__list-item">
                    <a className="contacts__item-link">Почта</a>
                </li>
                <li className="contacts__list-item">
                    <a className="contacts__item-link">Github</a>
                </li>
            </ul>
        </div>
    );
};

export default Contacts;
