export default (item) => {
    if (!item) return {}

    let decimal = 0;
    if (item.price.toString().includes('.')){
        decimal = data.price % 1;
    }

    let picture = item.thumbnail;
    if (item.pictures.length) {
        picture = item.pictures[0].url;
    }

    return {
        author: {
            name: 'Victor',
            lastname: 'Teixeira'
        },
        item: {
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: Math.trunc(item.price),
                decimals: decimal
            },
            picture: picture,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            sold_quantity: item.sold_quantity,
            description: item.description
        }
    }
}
