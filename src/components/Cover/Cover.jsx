import React from 'react';
import Photo from '../../images/Photo.jpg';
import '../Cover/Cover.scss';

const Cover = ({burgerMenuOpened}) => {

    return (
        <div className={burgerMenuOpened ? "cover cover_menu_opened" : "cover"}>
            <img src={Photo} className="cover__image"/>
            <p className="cover__text">Привет! Меня зовут Сергеева Настя 👋</p>
            <h1 className="cover__title">Я - фронтенд-разработчик <br/> Создаю удобные интерфейсы на React</h1>
            <a href="https://drive.google.com/file/d/1Oeoj2JPdpRZE2Ya_jvgvXclGgf3l4rte/view?usp=sharing" target="_blank"
               className="cover__button">Скачать резюме</a>
        </div>
    );
};

export default Cover;
