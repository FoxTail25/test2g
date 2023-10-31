import React from 'react'
import { useEffect } from 'react'

console.log(1)


export const UsEffect = () => {

    
console.log(2)
useEffect(()=>{

  document.querySelector('title').innerHTML = 'bomb'
  document.querySelector('.Helen').innerHTML = '<i style="text-decoration: underline;">Елена</i>, useEffect - это <b class="red">БОМБИЧНАЯ</b> хрень!'

  console.log(3)
},[])

  return (
    <div style={{margin: "0 auto", width:"fit-content", textAlign:"center"}}>
    <div>useEffect{console.log(4)}</div>
    <p className='Helen'></p>
    </div>
  )
}
