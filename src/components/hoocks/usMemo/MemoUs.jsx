import React, { useMemo, useState } from 'react'

export const MemoUs = () => {

  const [isGreen, setIsGreen] = useState(false);

  const [num, setnum] = useState(0);

  let result = useMemo(() => square(num), [num]);
  // let result = square(num)

  console.log('rerender')

  function square(num) {
    let startTime = performance.now();
    console.log(startTime, 'start function square')
    while (performance.now() - startTime < 500) {

    }
    return num * num;
  }

  return (
    <div>
      <h3 onClick={() => setIsGreen(!isGreen)} style={{ color: isGreen ? 'green' : "orange" }}>text</h3>
      <button onClick={() => setnum(num + 1)}>click:{result}</button>
    </div>
  )
}
