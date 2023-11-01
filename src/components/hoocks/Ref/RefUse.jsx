import React, { useRef } from 'react'
import { useState } from 'react'

export const RefUse = () => {

    const [state, setState] = useState('state Text')

    console.log('render')
    
    const ref = useRef('ref Text')
    
    function changeState() {
        setState(state + '!')
        ref.current = ref.current +1
    }
    function changeRef() {
        
        ref.current = ref.current + '!'
        // console.log(ref.current)
    }

    return (
        <div>
            <p>{state}</p>
            <button onClick={changeState}>
                text
            </button>
            <p>{ref.current}</p>
            <button onClick={changeRef}>
                text
            </button>
        </div>
    )
}
