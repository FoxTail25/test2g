import React, { useState } from 'react'

export const Elena = () => {

    const [name, setName] = useState('')

    function addLocalStorage() {
        localStorage.setItem('name', name);
        setName('')
    }

    console.log('render component')

  return (
    <div>
        <input  value={name} onChange={ e =>setName(e.target.value)}/>
        <button onClick={addLocalStorage}>add Name localStorage</button>
    </div>
  )
}
