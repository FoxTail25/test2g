import { nanoid } from "nanoid";
import Prod from "./Prod";

const prods = [
	{id: nanoid(), name: 'product1', cost: 100},
	{id: nanoid(), name: 'product2', cost: 200},
	{id: nanoid(), name: 'product3', cost: 300},
];


function Products() {

    

    return <ul>
        {prods.map(el => <Prod key={el.id} name ={el.name} cost={el.cost}/>)}
    </ul>
}

export default Products;