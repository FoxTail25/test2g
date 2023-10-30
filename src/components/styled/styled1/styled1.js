import '../../../sassCSS/style.css';

import { styles } from "./style";


export default function Styled1() {

	// для div:

	const wd1 = '200px';
	const br1 = '2px solid brown';
	const pd1 = '10px';
	const ta1 = 'center';
	const ma1 = '0 auto';

	// для первого p:
	const co1 = 'orangered';
	const fw1 = 'bold';
	
	// для второго p:
	const fs1 = 'italic';
	const co2 = 'brown';
	
	// для третьего p:
	const bco1 = 'orange';
	const co3 = 'white';



	return (
		<>
		<div  style={styles.class1}>
			<button style={{...styles.class2, ...styles.class5}}>text</button>
			<button  style={{...styles.class3, ...styles.class5}}>text</button>
		</div>
		<div style={{width: wd1, border: br1, padding: pd1, textAling: ta1, margin: ma1}}>
			<p style={{color: co1, fontWeight: fw1}}>text</p>
			<p style={{fontStyle: fs1, color: co2}}>text</p>
			<p style={{backgroundColor: bco1, fontWeigh: fw1, color: co3}}>text</p>
		</div>
		</>
	);
}
