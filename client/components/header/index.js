import React from 'react';
import './style.scss';

export default () => {
    return (
        <header className="header">
            <div className="header__container">
                <a className="header__container__logo" href="/">Mercado Livre</a>
                <input type="text"/>
                <button>Buscar</button>
            </div>
        </header>
    )
}
