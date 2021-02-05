import axios from 'axios';

const url = 'https://eurekahealth.herokuapp.com/products';
// const url = 'http://localhost:5000/products';

export const fetchPosts = () => axios.get(url);
export const createPost = (newProduct) => axios.post(url, newProduct);
