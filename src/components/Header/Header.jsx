import React from 'react';
import './Header.scss';

const Header = ({openBurgerMenu, burgerMenuOpened}) => {

    const handleClickScroll = (block) => {
        const element = document.getElementById(block);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" });
        }
    };

    return (
        <header className="header">
            <div className={!burgerMenuOpened ? "header__content header__content_closed" : "header__content"}>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-list-item" onClick={() => handleClickScroll('techs')}>
                            Стек
                        </li>
                        <li className="header__nav-list-item" onClick={() => handleClickScroll('projects')}>
                            Проекты
                        </li>
                        <li className="header__nav-list-item" onClick={() => handleClickScroll('about')}>
                           Обо мне
                        </li>
                        <li className="header__nav-list-item" onClick={() => handleClickScroll('contacts')}>
                            Контакты
                        </li>
                    </ul>
                </nav>
            </div>
            <button onClick={() => openBurgerMenu()} className={burgerMenuOpened ? "burger-menu__button burger-menu__button_closed" : "burger-menu__button"}></button>
        </header>
    );
};

export default Header;
