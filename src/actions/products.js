import * as api from '../api';

// Action Creators
export const getProducts = () => async (dispatch) => {
    try{
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    }

}

export const createProduct = (product) => async (dispatch) => {
    try{
        //makes a api request to the backend server to create a post
        const { data } = await api.createPost(product);

        dispatch({ type: 'CREATE', payload: data });
    } catch(error) {
        console.log(error);
    }
}

