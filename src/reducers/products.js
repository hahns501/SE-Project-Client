// eslint-disable-next-line
export default (products = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            //actual post
            return action.payload;
        case 'CREATE':
            return [...products, action.payload];
        default:
            return products;
    }
}