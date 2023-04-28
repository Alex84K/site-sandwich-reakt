import React from "react";
import './Header.css';
//import './logo.svg';
import './Menu.png';
import './bascket 1.png';

function Header() {

    return (
        <header className='header'>
            <div className='hedLeft menuL'>
                <img src='../image/logo.svg' alt="logo" className="logoS" />
                <img src='../image/Menu.png' alt="menu" className="menu" />
                <p className="pMenu">Главная</p>
            </div>

            <div className="menuR displayRow">
                <div className="menuMidl displayRow">
                    <p className="pMenu">Заказать</p>
                    <p className="pMenu">О нас</p>
                    <p className="pMenu">Контакты</p>
                </div>
                <div className="cartHeader displayRow">
                    <img className="cartHeader" src="../image/bascket 1.png" alt="bascket" />
                    <p>(0)</p>
                </div>
            </div>

            <div className="headerMobi">
                <h1>Hallo bro!</h1>
            </div>
        </header>

    )
}

export default Header;