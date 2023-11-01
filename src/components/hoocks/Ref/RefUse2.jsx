import React, { useRef } from 'react'

export const RefUse2 = () => {

    const i = useRef(null)
    const p = useRef(null)

    console.log('render');

    function handleClick() {
        i.current.focus()
        i.current.style.background = 'yellow'
        i.current.value = ''
        p.current.innerHTML = '<b>red</b>blabla'
        console.log(i)
        console.log(i.current)
    }

  return (
    <div>
        <input ref={i}/>
        <p ref={p}></p>
        <button onClick={handleClick}>focus</button>
    </div>
  )
}
