import React, { useContext } from 'react'
import { Daughter } from './Daughter'
import { MyContext } from '../../../../MyContext'

export const Parent = () => {

    const {age, setAge} = useContext(MyContext)
    // const [age, setAge] = context
    // const {age, setAge} = useContext(MyContext)


    return (
        <div>
            Parent
            {/* {age * 2} */}
            <button onClick={()=>setAge(+age - 2)}>-2</button>
            <Daughter/>
        </div>)
}


