import React, { memo } from 'react'

// export const Child = ({ name }) => {
//   console.log('child render');
//   return <>
//     <h3>
//       Hello {name}!
//     </h3>;
//   </>
// }


export const Child = memo( function Child({name}) {
  console.log('child render func');
  return <h3>
    Hello {name}!
  </h3>
})