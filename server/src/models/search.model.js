export default (data) => {
    if (!data || !data.results.length) return {}

    return {
        author: {
            name: 'Victor',
            lastname: 'Teixeira'
        },
        categories: (!data.filters.length || !data.filters[0].values.length) ? [] : data.filters[0].values[0].path_from_root.map(item => {
            return item.name
        }),
        items: data.results.map(item => {

            let decimal = 0;
            if (item.price.toString().includes('.')){
                decimal = data.price % 1;
            }

            return {
                id: item.id,
                title: item.title,
                price: {
                    currency: item.currency_id,
                    amount: Math.trunc(item.price),
                    decimals: decimal
                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping
            }
        })
    }
}
