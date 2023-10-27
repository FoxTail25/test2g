function ProductFild({id, text, type, isEdit, editProduct}) {

    return isEdit
    ? <input value={text} onChange={ev => editProduct(id, type, ev)}/>
    : <span>{text}</span>
}

export default ProductFild