// eslint-disable-next-line
export default (products = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            //actual post
            console.log("FETCH_ALL Reducer")
            return action.payload;
        case 'CREATE_PRODUCT':
            console.log("CREATE_PRODUCT Reducer")
            return [...products, action.payload];
        default:
            return products;
    }
}