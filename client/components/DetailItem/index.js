import React from 'react';
import './style.scss';

const DetailItem = props => {
    const sold_quantity = new Intl.NumberFormat().format(Math.trunc(props.item.sold_quantity)).replace(',', '.');
    const price = new Intl.NumberFormat().format(Math.trunc(props.item.price.amount)).replace(',', '.');
    const decimals = (props.item.price.decimals < 10) ? `0${props.item.price.decimals}` : props.item.price.decimals;

    return (
        <div className="detailItem">
            <div className="detailItem__top">
                <img className="detailItem__top__imageItem" src="http://mla-s1-p.mlstatic.com/795446-MLA31847575812_082019-O.jpg" alt=""/>
                <div className="detailItem__top__info">
                    <div className="detailItem__top__info__state">{props.item.condition} - {sold_quantity} vendidos</div>
                    <h1 className="detailItem__top__info__title">{props.item.title}</h1>
                    <div className="detailItem__top__info__price">$ {price}<span className="detailItem__top__info__price__decimals">{decimals}</span></div>
                    <button className="detailItem__top__info__button">Comprar</button>
                </div>
            </div>
            <div className="detailItem__description">
                <div className="detailItem__description__title">Descriotion del producto</div>
                <span className="detailItem__description__description">
                    {props.item.description.split('\n').map((item, key) => {
                        return <span key={key}>{item}<br/></span>
                    })}
                </span>
            </div>
        </div>
    )
};

export default DetailItem;
