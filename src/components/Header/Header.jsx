import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-list-item">
                        <a className="header__nav-list-item-link">Стек</a>
                    </li>
                    <li className="header__nav-list-item">
                        <a className="header__nav-list-item-link">Проекты</a>
                    </li>
                    <li className="header__nav-list-item">
                        <a className="header__nav-list-item-link">Обо мне</a>
                    </li>
                </ul>
            </nav>
            <ul className="header__contacts">
                <li className="header__contacts-item">
                    <a className="header__contacts-link">Telegram</a>
                </li>
                <li className="header__contacts-item">
                    <a className="header__contacts-link">WhatsApp</a>
                </li>
                <li className="header__contacts-item">
                    <a className="header__contacts-link">Почта</a>
                </li>
            </ul>
        </header>
    );
};

export default Header;
