import { useState } from "react";

function getSum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += +elem;
	}
	
	return res;
}

export default function Calculator() {
	const [value, setValue] = useState('');
	const [nums, setNums] = useState([1, 2, 3]);
	// const [sum, setSum] = useState(6); // сумма элементов массива nums
	
	function handleChange(event) {
		setValue(event.target.value);
	}
	
	function handleBlur(event) {
		setNums([...nums, event.target.value]); // добавляем элемент в массив 
		// setSum(getSum([...nums, event.target.value])); // вычисляем сумму заново
	}
	
	return <div>
		<p>{getSum(nums)}</p>
		<input value={value} onChange={handleChange} onBlur={handleBlur} />
	</div>;
}