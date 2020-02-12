import React from 'react';
import Head from 'next/head';
import fetch from 'node-fetch';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import Main from '../../components/Main';
import ListItem from '../../components/ListItem';

const getItems = items => {
    if (items) {
        return (
            <>
                {items.map(item => {
                    return (<ListItem key={item.id} item={item}/>)
                })}
            </>
        )
    }

    return;
}

const Index = props => {
    return (
        <Layout>
            <Head>
                <title>{props.search} [Melhor Preço] no Mercado Livre Brasil</title>
                <meta name="description" content={`Encontre ${props.search} no Mercado Livre Brasil. Descubra a melhor forma de comprar online. Aproveite o frete grátis pelo Mercado Livre Brasil!`}></meta>
            </Head>
            
            {props.data && props.data.items && props.data.items.length ?
                <>
                    <Breadcrumb categories={props.data.categories}/>
                    <Main>
                        {getItems(props.data.items)}
                    </Main>
                </>
            :
                ''
            }
        </Layout>
    )
};

Index.getInitialProps = async props => {
    const { query } = props;
    const { search } = query;

    const response = await fetch(`http://localhost:3001/api/items?q=${search}`);
    const data = await response.json();

    return { search, data };
}

export default Index;
