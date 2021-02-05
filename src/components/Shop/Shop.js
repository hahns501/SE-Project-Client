import React, { useState, useEffect } from 'react';
import Products from './../Products/Products'
import Form from "./../Form/Form";
import SearchProduct from "./SearchProduct/SearchProduct";
import './Shop.css'
import AddIcon from '@material-ui/icons/Add';
import {NavLink} from "react-router-dom";



const Shop = () => {
    const [formShow, setformShow] = useState(false)

    const showInput = () => {
        setformShow(!formShow)
    }

    return(
        <div className={"Shop"}>
            <SearchProduct/>
            <div className={"productBar"}>
                <h1 className={"pro"}>Products</h1>
                <AddIcon className={"addIcon"} onClick={showInput}/>
            </div>

            {formShow ? <Form/> : ""}
            <Products />
        </div>
    )
}

export default Shop;