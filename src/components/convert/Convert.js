import { useState } from "react"
import { InpTemp } from "./tempInp"


function ConvertCellToFar() {

    const [cell, setCell] = useState(0)

    let far = (cell * 9 / 5 + 32)

    function inpFar(num) {
        return setCell(5 / 9 * (num - 32))
    }

    return <>
        <p>cell
            <InpTemp temp={cell} setTemp={setCell} />
        </p>
        <p>far
            <InpTemp temp={far} setTemp={inpFar} />
        </p>
    </>
}

export default ConvertCellToFar