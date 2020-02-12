import React from 'react';
import '../styles/globals.scss';
import Header from '../Header';

const Layout = props => {
    return (
        <>
            <Header/>
            {props.children}
        </>
    )
};

export default Layout;
