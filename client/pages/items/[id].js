import React from 'react';
import fetch from 'node-fetch';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import Main from '../../components/Main';
import DetailItem from '../../components/DetailItem';

const Index = props => {
    return (
        <Layout>
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
