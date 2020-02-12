import React from 'react';
import './style.scss'

const DetailItem = props => {
    return (
        <div className="detailItem">
            <div className="detailItem__top">
                <img className="detailItem__top__imageItem" src="http://mla-s1-p.mlstatic.com/795446-MLA31847575812_082019-O.jpg" alt=""/>
                <div className="detailItem__top__info">
                    <div className="detailItem__top__info__state">Nuevo - 234 vendidos</div>
                    <div className="detailItem__top__info__title">Deco reverse Sombrero Oxford</div>
                    <div className="detailItem__top__info__price">$ 1.980<span className="detailItem__top__info__price__decimals">00</span></div>
                    <button className="detailItem__top__info__button">Comprar</button>
                </div>
            </div>
            <div className="detailItem__description">
                <div className="detailItem__description__title">Descriotion del producto</div>
                <span className="detailItem__description__description">
                    blablabla
                </span>
            </div>
        </div>
    )
};

export default DetailItem;
