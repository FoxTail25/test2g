import React from 'react'
import { useEffect } from 'react'

console.log(1)

let container = {
  margin: "0 auto", width:"fit-content", textAlign:"center"
}


export const UsEffect = () => {

    
console.log(2)
useEffect(()=>{

  document.querySelector('title').innerHTML = 'bomb'
  document.querySelector('.Helen').innerHTML = '<i style="text-decoration: underline;">Елена</i>, useEffect - это <b style="color:red">БОМБИЧНАЯ</b> хрень!'

  console.log(3)
},[])

  return (
    <div style={container}>
    <div>useEffect{console.log(4)}</div>
    <p className='Helen'></p>
    </div>
  )
}
