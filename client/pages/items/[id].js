import React from 'react';
import Head from 'next/head';
import fetch from 'node-fetch';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import Main from '../../components/Main';
import DetailItem from '../../components/DetailItem';

const Index = props => {
    const price = new Intl.NumberFormat().format(Math.trunc(props.data.item.price.amount)).replace(',', '.');
    const decimals = (props.data.item.price.decimals < 10) ? `0${props.data.item.price.decimals}` : props.data.item.price.decimals;
    return (
        <Layout>
            <Head>
                <title>{props.data.item.title} - $ {props.data.item.price.amount} em Mercado Livre</title>
                <meta name="description" content={`Compre-o no Mercado Livre por $ ${price},${decimals} - Compre em 12x.`}></meta>
            </Head>
            <Breadcrumb categories={props.data.categories}/>
            <Main>
                <DetailItem key={props.data.item.id} item={props.data.item}/>
            </Main>
        </Layout>
    )
};

Index.getInitialProps = async props => {
    const { query } = props;
    const { id } = query;

    const response = await fetch(`http://localhost:3001/api/items/${id}`);
    const data = await response.json();

    return { id, data };
}

export default Index;
