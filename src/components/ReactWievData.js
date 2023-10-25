import { nanoid } from "nanoid";
import { useState } from "react";


const initNotes = [
	{
		id: nanoid(21),
		name: 'name1',
		desc: 'long description 1',
        show:false
	},
	{
		id: nanoid(21),
		name: 'name2',
		desc: 'long description 2',
        show:false
	},
	{
		id: nanoid(21),
		name: 'name3',
		desc: 'long description 3',
        show:false
	},
];

// 1) В конце каждого абзаца сделайте кнопку, по нажатию на которую будет показываться полное описание продукта.

export default function ReactWievData() {

    const [notes, seNotes] = useState(initNotes)
 
function showDesk(event) {
    seNotes(notes.map(elem => {
        if(elem.id === event.id) {
            return {...elem, show:!elem.show}
        } else {
            return elem
        }
    }))
}

     return (
        <>
        {notes.map(note=> <p key={note.id}>{note.name } {note.show? <i>{ note.desc}</i>:""} <button onClick={()=>showDesk(note)}>show/hide</button></p>)}
        </>
     )

}