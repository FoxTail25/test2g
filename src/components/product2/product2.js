import { nanoid } from "nanoid";
import { useState } from "react";
import Prod2 from "./prod2";

const initProds = [
    { id: nanoid(), name: 'prod1', cost: 'cost1', catg: 'catg1' },
    { id: nanoid(), name: 'prod2', cost: 'cost2', catg: 'catg2' },
    { id: nanoid(), name: 'prod3', cost: 'cost3', catg: 'catg3' },
];

function Products2() {

    const [prod, setProd] = useState(initProds)

    function changeField(id, field, event) {
        setProd(prod.map(prod => {
            if (prod.id === id) {
                prod[field] = event.target.value
            }
            return prod
        }))
    }

    const rows = prod.map(e =>
        <Prod2
            key={e.id}
            id={e.id}
            name={e.name}
            cost={e.cost}
            catg={e.catg}
            changeField={changeField}
        />)

    return <table>
        <tbody>
            {rows}
        </tbody>
    </table>
}

export default Products2