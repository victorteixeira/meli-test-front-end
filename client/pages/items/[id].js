import React from 'react';
import fetch from 'node-fetch';
import '../../components/styles/globals.scss';
import Header from '../../components/Header';
import Breadcrumb from '../../components/Breadcrumb';
import Main from '../../components/Main';
import DetailItem from '../../components/DetailItem';

const Index = ({ data = {}, query = {} }) => (
    <>
        <Header/>
        {query.id ? (
            <>
                <Breadcrumb categories={data.categories}/>
                <Main>
                    <DetailItem/>
                </Main>
            </>
        ) : (<></>)}
    </>
);

Index.getInitialProps = async ({ query }) => {
    console.log(query);
    const q = query.id;

    if (q) {
        const response = await fetch(`http://localhost:3001/api/items?q=${query.id}`);
        const data = await response.json();

        return { data, query };
    }

    return {};
}

export default Index;
