import React, { useState } from 'react'
import { Child } from './Child';

export const MemoApi = () => {

    const [name, setName] = useState('');
    const [surn, setSurn] = useState('');




  return (
	<div>
		<label>
			name:
			<input value={name} onChange={(e) => setName(e.target.value)} />
		</label>
		<br />
		<label>
			surname:
			<input value={surn} onChange={(e) => setSurn(e.target.value)} />
		</label>

        <Child name={name} />
	</div>
  )
}
