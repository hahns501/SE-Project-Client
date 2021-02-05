import React, { useState }from 'react';
import './SearchProduct.css'
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/Search'
import Input from '@material-ui/core/Input'

const SearchProduct = () =>{
    const [productSearchData, setProductSearchData] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(productSearchData)
    }

    const onEnterPress = (e) => {
        if(e.which === 13){
            handleSubmit(e)
        }
    }

    return(
        <div className={"SearchProduct"}>
            {/*<input onSubmit={handleSubmit} placeholder={"Search"} name={"productSearchData"} type={"text"} value={productSearchData} onChange={(e) => setProductSearchData(e.target.value)}/>*/}

            <Input className={"adornment"} placeholder={"Search"} name={"productSearchData"} type={"text"} value={productSearchData}
                onChange={(e) => setProductSearchData(e.target.value)}
               onKeyDown={onEnterPress}
                endAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                }
            />
        </div>

    )
}

export default SearchProduct