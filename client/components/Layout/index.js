import React from 'react';
import Head from 'next/head';
import '../styles/globals.scss';
import Header from '../Header';

const Layout = props => {
    return (
        <>
            <Head>
                {process.env.NODE_ENV !== 'production' && (
                    <link rel="stylesheet" href={'/_next/static/css/styles.chunk.css?v=' + Date.now()}/>
                )}
            </Head>
            <Header/>
            {props.children}
        </>
    )
};

export default Layout;
