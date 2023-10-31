import React, { useContext } from 'react'
import { Grandson } from './Grandson'
import { MyContext } from '../../../../MyContext'

export const Daughter = () => {

  const {age,setAge} = useContext(MyContext);
  
// console.log(age)
// console.log(setAge)

  return (
    <div>
    Daughter
    {age}
    <Grandson/>
    </div>
  )
}
