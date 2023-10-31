import React from 'react'
import { useEffect } from 'react'

console.log(1)


export const UsEffect = () => {

    
console.log(2)

useEffect(()=>{
	console.log(3)
},[])


  return (
    <div>useEffect{console.log(4)}</div>
  )
}
