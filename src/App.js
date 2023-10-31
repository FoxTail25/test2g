import { useState } from 'react';
import { MyContext } from './MyContext.js';
import { Parent } from './components/hoocks/context/task2/Parent.jsx';
import './style.css'



export default function App() {

	const [age, setAge] = useState(50)

	return (
		<MyContext.Provider value={{age,setAge}}>

			<Parent/>

		</MyContext.Provider>
	);
}
