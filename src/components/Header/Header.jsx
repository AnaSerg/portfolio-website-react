import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__content">
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
                        <li className="header__nav-list-item">
                            <a className="header__nav-list-item-link">Контакты</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
