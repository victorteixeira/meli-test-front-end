import React from 'react';
import fetch from 'node-fetch';
import Header from '../../components/header';

const Index = ({ data = {}, query = {} }) => (
    <>
        <Header/>
        Busca: {query.search}
    </>
);

Index.getInitialProps = async ({ query }) => {
    const q = query.search;

    if (q) {
        const response = await fetch('http://localhost:3001/api/items?q=notebook');
        const data = await response.json();

        return { data, query };
    }

    return {};
}

export default Index;
