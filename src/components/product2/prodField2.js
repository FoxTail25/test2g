import { useState } from "react"


function ProdFields2({ id, text, type, changeField }) {

    const [isEdit, setIsEdit] = useState(false);

console.log('mount')

    return <td>
        {
            isEdit
                ? <input
                    value={text}
                    onChange={(event) => changeField(id, type, event)}
                    onBlur={() => setIsEdit(false)} 
                    
                />
                : <span onClick={() => setIsEdit(true) }>
                    {text}
                </span>
        }
    </td>

}

export default ProdFields2