import React from 'react'

export const InpTemp = ({temp, setTemp}) => {
  return (
    <input type="number" value={temp} onChange={(ev)=>setTemp(+ev.target.value)}/>
  )
}

