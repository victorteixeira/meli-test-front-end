import React from 'react';
import './style.scss';

const Breadcrumb = props => {
    const categories = props.categories ? props.categories.join(' > ') : '';
    return (
        <div className="Breadcrumb">{categories}</div>
    )
};

export default Breadcrumb;
