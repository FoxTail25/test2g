import { useState } from "react";

export default function App22() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	const [value, setValue] = useState(['','']);
	
	const result = notes.map((note, index) => {
		return <p key={index} onClick={() => setValue([note, index])}>
			{note}
		</p>;
	});
	

	function changeItem(event,i) {
		setValue([event.target.value, i]);
		setNotes([...notes.slice(0, i), event.target.value,...notes.slice(i + 1)]);
	}
	
	return <div>
		{result}
		<input value={value[0]} onChange={(e)=>changeItem(e,value[1])} />
	</div>;
}