import React, { useEffect } from 'react';
import Products from './../Products/Products'
import Form from "./../Form/Form";

const Shop = () => {
    return(
        <div>
            <h1>Shop</h1>
            <Products />
            <Form />
        </div>
    )
}

export default Shop;