import { Link } from "react-router-dom";
const ProductCard = (props) =>{
    return (
        <Link to={`/product/${props.value.id}`} key={props.value.id}>
            <div className="products" >
                <div className="ProductCard">
                    <img src={props.value.thumbnail} alt={props.value.title}/>
                    <span>{props.value.title}</span>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard;