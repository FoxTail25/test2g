import React from "react";

function Product({name, cost}) {

    console.log(name, cost)

    return <p>
        Имя: {name} <span> Цена: {cost}</span>
    </p>
}

export default Product;