import React from 'react';
import './style.scss';

const ListItem = props => {
    return (
        <div className="listItem">
            <a href={`/items/${props.item.id}`}>
                <img className="listItem__imageItem" src="http://mla-s2-p.mlstatic.com/668608-MLA32924148410_112019-I.jpg" width="180" height="180" alt="123"/>
                <div className="listItem__details">
                    <div className="listItem__details__price">$ {props.item.price.amount}</div>
                    <h2 className="listItem__details__title">{props.item.title}</h2>
                </div>
                <div className="listItem__info">Capital Federal</div>
            </a>
        </div>
    )
};

export default ListItem;
