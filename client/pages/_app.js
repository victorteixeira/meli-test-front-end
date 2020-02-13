import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';

// Correção BUG - em DEV o css estava ficando com cache e não atualizava
Router.events.on('routeChangeComplete', () => {
    if (process.env.NODE_ENV !== 'production') {
        const doc = document.querySelectorAll('link[rel=stylesheet][href*="/_next/static/css/styles.chunk.css"]');
        //doc.forEach(el => {
            if (doc[0]) {
                const timestamp = new Date().valueOf();
                doc[0].href = '/_next/static/css/styles.chunk.css?v=' + timestamp;
            }
        //});
    }
});

class MyApp extends App {}

export default MyApp;
