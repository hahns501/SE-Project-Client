import React from 'react';
import { useSelector } from "react-redux";

import Items from './ProductTemp/Items';


const Products = () =>{
    const products = useSelector((state) => state.products);

    console.log(products)

    return (
        <div>
            {products.map((item) => (
                <div>
                    <Items item={item} />
                </div>
            ))}
        </div>
    )
}

export default Products;
