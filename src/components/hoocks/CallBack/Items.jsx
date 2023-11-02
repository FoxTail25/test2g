import React from 'react';
import {memo} from 'react';

export const Items = memo(({items, addItem}) => {
  
  let result = items.map((el, ind)=> <p key={ind}>{el}</p>)

  console.log('items render')
  
    return (
    <div>
        <h3>Our items</h3>
        {result}
        <button onClick={addItem}>addItem</button>
    </div>
  )
})
