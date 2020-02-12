import React from 'react';
import './style.scss';

const Main = props => {
    return (
        <main className="main">
            {props.children}
        </main>
    )
};

export default Main;
