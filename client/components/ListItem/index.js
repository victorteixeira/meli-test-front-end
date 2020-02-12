import React from 'react';
import Link from 'next/link';
import './style.scss';

const ListItem = props => {
    const price = new Intl.NumberFormat().format(Math.trunc(props.item.price.amount)).replace(',', '.');
    return (
        <div className="listItem">
            <Link href="/items/[id]" as={`/items/${props.item.id}`}>
                <a>
                    <img className="listItem__imageItem" src={props.item.picture} alt={props.item.title}/>
                    <div className="listItem__details">
                        <div className="listItem__details__price">
                            $ {price}
                            {props.item.free_shipping ? <img className="listItem__details__price__shipping" src="/imgs/ic_shipping.png" alt="Free Shipping"/> : ''}
                        </div>
                        <h2 className="listItem__details__title">{props.item.title}</h2>
                    </div>
                    <div className="listItem__info">Capital Federal</div>
                </a>
            </Link>
        </div>
    )
};

export default ListItem;
