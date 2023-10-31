import React from 'react'
import { useEffect } from 'react'

console.log(1)


export const UsEffect = () => {

    
console.log(2)

useEffect(()=>{
  let domChild = [...document.head.children]
	console.log(domChild)
  let title = domChild.filter(elem => elem.nodeName==='TITLE')
  title[0].innerHTML = 'useEffect'
  console.log(title)
},[])


  return (
    <div>useEffect{console.log(4)}</div>
  )
}
