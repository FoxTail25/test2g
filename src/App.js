import { useState } from 'react';
import { MyContext } from './MyContext.js';
import { Parent } from './components/context/task2/Parent.jsx';
// import { BigBox } from './components/context/task1/BigBox.js';
import './style.css'



export default function App() {

	const [age, setAge] = useState(42)

	return (
		<MyContext.Provider value={age}>

			<Parent/>

		</MyContext.Provider>
	);
}
