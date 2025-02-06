import React from "react"
import useOwnHooks from "../customHooks/useOwnHooks"
import ProductCard from "./ProductCard"
const ProductListing = () =>{
    const product = useOwnHooks('https://dummyjson.com/products?limit=30')
    return (
        <div className="App">
            <h1>Product List</h1>
            {
                product.map((value,index)=>{
                    return <ProductCard value={value}/>
                })
            }
        </div>
    )
}

export default ProductListing;