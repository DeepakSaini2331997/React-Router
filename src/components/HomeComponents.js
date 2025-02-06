
import { Link } from "react-router-dom"
import useOwnHooks from "../customHooks/useOwnHooks"
import ProductCard from "./ProductCard"
const HomeComponents = () =>{
    const product = useOwnHooks('https://dummyjson.com/products?limit=6')
    return (
        <div>
            <h1>Home Page</h1>
            {
                product.map((value,index)=>{
                    return <ProductCard value={value}/>
                })
            }
            <button>
                <Link to={'/product'}>
                    View All Product
                </Link>
            </button>
        </div>
    )
}

export default HomeComponents;