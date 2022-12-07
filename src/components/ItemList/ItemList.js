import { Link } from "react-router-dom"

const ItemList = ({ products}) => {
 return (
    
<div>
        {
            products.map (product => {
                return (
                    <div key={product.id}>
                        <img src={product.img} alt={product.name} style={{ width:250}} />
                        <h3>{product.name}</h3>
                        <p>$ {product.price}</p>
                        <Link to={`/detail/${product.id}`}>Ver</Link>
                    </div>
            )
        })

    }
        </div> 
    
 )   
}

export default ItemList

