
export default function Prod({id, name, cost, inCart, addToCart }) {

    return <li>
        <p>Имя: <i>{name}</i></p>
        <span style={{marginLeft: "10px"}}>Цена: <i>{cost}</i></span>
        <span style={{marginLeft: "10px"}}><b>{inCart ? "in cart":"not in cart"}</b></span>
        <button onClick={()=>addToCart(id)}>В корзину</button>
    </li>
}