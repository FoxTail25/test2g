
export default function Prod({ id, name, cost, inCart, addToCart, isEdit, toggleMode, editProduct }) {

    let ml = {
        marginLeft: "10px"
    }
    let ft = {
        width: "fit-Content",
    }

    return <li>
        <p>
            {
                isEdit
                    ? (
                        <>
                            <p>

                                "Имя:" <input style={ft} value={name} />
                            </p>
                            <p>
                                "Цена:" <input value={cost} />
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

        <span style={ml}>
            <b>{inCart ? "in cart" : "not in cart"}</b>
        </span>
        <button style={ml} onClick={() => addToCart(id)}>В корзину</button>

    </li>
}