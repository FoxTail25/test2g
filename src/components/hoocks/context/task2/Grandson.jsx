import React, { useContext } from 'react'
import { MyContext } from '../../../../MyContext'

export const Grandson = () => {

    const {age, setAge} = useContext(MyContext)


    return (
        <div>
            Grandson
            <input value={age} onChange={(e)=> setAge(e.target.value)}/>
            {age / 2}
        </div>
    )
}
