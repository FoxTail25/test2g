import React, { useState } from 'react'
import { Items } from './Items'

export const CallBack = () => {
    const [num, setNum] = useState(0)
    const [items, setItems] = useState([])

    function addItem() {
        setItems([...items, 'new item'])
    }


    return (
        <div>
            <button onClick={() => setNum(num + 1)}>
                click
            </button>
            <p>
                clicks: {num}
            </p>
            <Items items={items} addItem={addItem} />
        </div>
    )
}
