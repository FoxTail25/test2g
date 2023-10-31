import React from 'react';
import mod from './button.module.css'

export const CssMod = () => {
  return (
	<>
		<button className={mod.btn1}>btn1</button>
		<button className={mod.btn2}>btn2</button>
		<button className={mod.btn3}>btn3</button>
	</>
  )
}
