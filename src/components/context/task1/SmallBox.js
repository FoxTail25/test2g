import React, { useContext } from 'react'
import { MyContext } from '../../../MyContext';

export const SmallBox = () => {

    const name = useContext(MyContext);




  return (
    <p>I am {name}</p>
  )
}
