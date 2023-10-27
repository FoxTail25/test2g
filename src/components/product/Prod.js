import ProductFild from "./ProductFild"

export default function Prod({ id, name, cost, inCart, addToCart, isEdit, toggleMode, editProduct }) {

    let ml = {
        marginLeft: "10px",
        transition: '.3s'
    }



    let cr = {
        ...ml,
        background: "red",
        padding: "0 10px",
        borderRadius: "8px"
    }
    let gn = {
        ...ml,
        background: "green",
        padding: "0 10px",
        borderRadius: "8px"
    }

    return <li>
        <p style={{ transition: "1s" }}>
            "Имя:" <ProductFild
                id={id}
                text={name}
                type={"name"}
                isEdit={isEdit}
                editProduct={editProduct}
            />
            "Цена:"<ProductFild
                id={id}
                text={cost}
                type={"cost"}
                isEdit={isEdit}
                editProduct={editProduct}
            />
            {/* "Имя:" {
                isEdit
                    ? <input value={name} onChange={(event) => editProduct(id, 'name', event)} />
                    : <span>{name}</span>
            } */}
            {/* "Цена:" {
                isEdit
                    ? <input value={cost} onChange={(event) => editProduct(id, 'cost', event)} />
                    : <span style={ml}>{cost}</span>
            } */}
            <button style={ml} onClick={() => toggleMode(id)}>
                {
                    isEdit
                        ? "save"
                        : "edit"
                }
            </button>
        </p>

        <span style={
            inCart
                ? gn
                : cr
        }>
            <b>{inCart
                ? "in cart"
                : "not in cart"
            }</b>
        </span>

        <button style={ml} onClick={() => addToCart(id)}>В корзину</button>

    </li>
}