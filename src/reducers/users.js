// eslint-disable-next-line
export default (users = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            console.log("Fetch_all reducer");
            return action.payload;
        case 'CREATE':
            console.log("Create reducer");
            return [...users, action.payload];
        default:
            return users;
    }
}