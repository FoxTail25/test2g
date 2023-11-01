import React, { useMemo, useState } from 'react'

export const Task2 = () => {

    const [text, setText] = useState('react')
    const [num, setNum] = useState(0)

    // let result = triple(num)

    let result = useMemo(()=> triple(num), [num])

    function triple(n) {
        let startTime = performance.now();
        console.log(startTime, 'start function square')
        while (performance.now() - startTime < 500) {
    
        }
        return n * 3
    }



  return (
    <div>
        <p onClick={()=>setText(text + '!')}>{text}</p>
        <p onClick={()=>setNum(+num + 1)}>{num} {result}</p>
    </div>
  )
}
