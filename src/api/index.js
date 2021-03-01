import axios from 'axios';

const url = 'https://eurekahealth.herokuapp.com/products';

const url2 = 'https://eurekahealth.herokuapp.com/users';

//
// const url = 'http://localhost:5000/products';
//
// const url2 = 'http://localhost:5000/users';

export const fetchPosts = () => axios.get(url);
export const createPost = (newProduct) => axios.post(url, newProduct);
export const deleteProduct = (id) => axios.delete(`${url}/${id}`);

export const createUser = (newUser) => axios.post(`${url2}/create`, newUser);
export const fetchUsers = () => axios.get(url2);
export const findUser = (user) => axios.post(url2, user);
export const loginUser = (user) => axios.post(`${url2}/login`,user);
export const logoutUser = (user) => axios.post(`${url2}/logout`,user);
