
export default function Prod({ name, cost }) {

    return <li>
        <span>Имя: <i>{name}</i></span>
        <span style={{marginLeft: "10px"}}>Цена: <i>{cost}</i></span>
    </li>
}