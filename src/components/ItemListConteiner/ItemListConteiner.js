import { useState, useEffect } from "react"
import { getProducts } from '../../AsyncMocks'
import ItemList from '../ItemList/ItemList'

const ItemListConteiner = () => {
    const [products, setProducts] = useState([])

    useEffect (() =>{
        getProducts ()
            .then(response =>{
            setProducts(response)
        })
            .catch (error => {
                console.log(error)
            })
    }, [])
        
    return (
        <div>
            <h1>Listado de Productos</h1>
            <ItemList products={products}/>
        </div>
    ) 

}

export default ItemListConteiner