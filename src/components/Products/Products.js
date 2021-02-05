import React from 'react';
import { useSelector } from "react-redux";
import Items from './ProductTemp/Items';

import './Product.css'


const Products = () =>{
    const products = useSelector((state) => state.products);

    console.log(products)

    return (
        <div className={"productMain"}>
            <div>
                {products.map((item) => (
                    <Items key={item.lookupCode} item={item} />
                ))}
            </div>
        </div>
    )
}

export default Products;
