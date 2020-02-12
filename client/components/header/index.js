import React from 'react';
import './style.scss';

export default props => {
    console.log(props);
    return (
        <header className="header">
            <div className="header__container">
                <a href="/" className="header__container__logo" title="Mercado Livre">Mercado Livre</a>
                <form action="/items" method="get" class="header__container__form">
                    <input name="search" type="text" className="header__container__input" placeholder="Nunca dejes de buscar" defaultValue={props.search} />
                    <button className="header__container__button" title="Buscar"></button>
                </form>
            </div>
        </header>
    )
}
