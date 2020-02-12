import React from 'react';
import fetch from 'node-fetch';
import '../../components/styles/globals.scss';
import Header from '../../components/Header';
import Breadcrumb from '../../components/Breadcrumb';
import Main from '../../components/Main';
import ListItem from '../../components/ListItem';

const Index = ({ data = {}, query = {} }) => (
    <>
        <Header search={query.search}/>
        {query.search ? (
            <>
                <Breadcrumb categories={data.categories}/>
                <Main>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                </Main>
                Busca: {query.search}
            </>
        ) : (<></>)}
    </>
);

Index.getInitialProps = async ({ query }) => {
    const q = query.search;

    if (q) {
        const response = await fetch(`http://localhost:3001/api/items?q=${query.search}`);
        const data = await response.json();

        return { data, query };
    }

    return {};
}

export default Index;
