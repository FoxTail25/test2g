import React, { useContext } from 'react'
import { MyContext } from '../../../MyContext'

export const Grandson = () => {

    const age = useContext(MyContext)


    return (
        <div>
            Grandson
            {age}
        </div>
    )
}
