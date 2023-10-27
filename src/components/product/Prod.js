
export default function Prod({ id, name, cost, inCart, addToCart, isEdit, toggleMode, editProduct }) {

    let ml = {
        marginLeft: "10px",
        transition: '.3s'
    }



    let cr = {...ml,
        background: "red",
        padding: "0 10px",
        borderRadius: "8px"
    }
    let gn = {...ml,
        background: "green",
        padding: "0 10px",
        borderRadius: "8px"
    }

    return <li>
        <p style={{transition: "1s"}}>
            {
                isEdit
                    ? (
                        <>
                            <p>

                                "Имя:" <input value={name} onChange={(event) => editProduct(id, 'name', event)}/>
                            </p>
                            <p>
                                "Цена:" <input type="number" value={cost} onChange={(event) => editProduct(id, 'cost', event)}/>
                            </p>
                        </>
                    )

                    : (
                        <>

                            "Имя:" <i>{name}</i>

                            <span style={ml}>
                                "Цена:" <i>{cost}</i>
                            </span>
                        </>
                    )

            }
            <button style={ml} onClick={() => toggleMode(id)}>
                {
                    isEdit
                        ? "save"
                        : "edit"
                }
            </button>
        </p>

        <span style= {inCart ? gn:cr}>
            <b>{inCart ? "in cart" : "not in cart"}</b>
        </span>
        <button style={ml} onClick={() => addToCart(id)}>В корзину</button>

    </li>
}