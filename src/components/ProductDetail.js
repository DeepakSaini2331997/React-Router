import React from "react"
import { useParams } from "react-router-dom";
import useOwnHooks from "../customHooks/useOwnHooks";
import ProductCard from "./ProductCard";
const ProductDetail = () =>{
    const { id } = useParams()
    const product = useOwnHooks(`https://dummyjson.com/products/${id}`)
    return (
        <div>
            {
                <ProductCard value={product}/>
            }
            <p>
                ${product.price}
            </p>
            <p>
                {
                    product.description
                }
            </p>
        </div>
    )
}

export default ProductDetail;