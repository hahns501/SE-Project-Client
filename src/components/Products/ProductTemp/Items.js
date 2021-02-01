import React from 'react';
import './Items.css'

const Item = ( {item} ) => {

    return(
        <div className='item'>
            <h2>Item ID:{item.lookupCode}</h2>
            <h2>Stock:{item.count}</h2>
        </div>
    )
}

export default Item;