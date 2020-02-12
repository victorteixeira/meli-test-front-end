import React from 'react';
import './style.scss';

const ListItem = props => {
    return (
        <div className="listItem">
            <a href="/items?search=notebook">
                <img className="listItem__imageItem" src="http://mla-s2-p.mlstatic.com/668608-MLA32924148410_112019-I.jpg" width="180" height="180" alt="123"/>
                <div className="listItem__details">
                    <div className="listItem__details__price">$ 1.980</div>
                    <h2 className="listItem__details__title">Notebook Exo Smart Intel Core I3 Xs3 F3145 4gb/500gb 14''</h2>
                </div>
                <div className="listItem__info">Capital Federal</div>
            </a>
        </div>
    )
};

export default ListItem;
