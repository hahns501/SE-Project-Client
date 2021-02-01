import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import  { getProducts } from "./actions/products";

import Header from './components/Header/Header'
import Main from './components/Main'

import './App.css'

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    return (
        <div>
            <Header/>
            <Main />
        </div>
    )
}

export default App;