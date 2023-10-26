import { nanoid } from "nanoid";
import Prod from "./Prod";
import { useState } from "react";

const product = [
	{id: nanoid(), name: 'product1', cost: 100, inCart: false},
	{id: nanoid(), name: 'product2', cost: 200, inCart: false},
	{id: nanoid(), name: 'product3', cost: 300, inCart: false},
];


function Products() {

    const [prods, setProds] = useState(product)

    function addToCart(id) {
        setProds(prods.map(prod => {
            if(prod.id === id) {
                prod.inCart = !prod.inCart
                return prod
            } else {
                return prod
            }
        }))
    }
    

    return <ul>
        {prods.map(el => 
        <Prod 
        key={el.id} 
        id={el.id} 
        name ={el.name} 
        cost={el.cost} 
        inCart={el.inCart}
        addToCart={addToCart}
        />)}
    </ul>
}

export default Products;