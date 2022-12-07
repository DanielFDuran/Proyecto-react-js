import { useState, useEffect } from "react"
import { getProductsById } from '../../AsyncMocks'
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [product, setProducts] = useState({})

    const { productId} = useParams()

    useEffect (() =>{
        getProductsById (productId)
            .then(response =>{
            setProducts(response)
        })
            .catch (error => {
                console.log(error)
            })
    }, [productId])
        
    return (
        <div>
            <h1>Detalle del Producto</h1>
            <div>
                <h2>{product.name}</h2>
                <img src={product.img} alt={product.name} />
                <p>{product.description}</p>
                <h3>${product.price}</h3>
            </div>        
        
        </div>
    ) 

}

export default ItemDetailContainer