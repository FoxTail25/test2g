import React from "react";

let arr = [1, 2, 3, 4, 5];

function App() {
	const [notes, setNotes] = useState(arr);
	
	const result = notes.map((note, index) => {
		return <li key={index}>{note}</li>;
	});
	
	return <div>
		<ul>
			{result}
		</ul>
	</div>;
}
