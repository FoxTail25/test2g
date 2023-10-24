// Реактивное добавление в массив объектов в React

// import { nanoid } from "nanoid";
import { useState } from "react";

const initNotes = [
    {
        id: 'GYi9G_uC4gBF1e2SixDvu',
        prop1: 'value11',
        prop2: 'value12',
        prop3: 'value13',
    },
    {
        id: 'IWSpfBPSV3SXgRF87uO74',
        prop1: 'value21',
        prop2: 'value22',
        prop3: 'value23',
    },
    {
        id: 'JAmjRlfQT8rLTm5tG2m1L',
        prop1: 'value31',
        prop2: 'value32',
        prop3: 'value33',
    },
];


// export default function ObjAddToArr() {

//     const [notes, setNotes] = useState(initNotes)

//     let result = notes.map(el => <li key={el.id}>
//         <span>{el.prop1} </span>
//         <span>{el.prop2} </span>
//         <span>{el.prop3} </span>
//     </li>)

// function addObjToArr() {
//     let quantity = notes.length+1;
//     let newElem = {
//         id: nanoid(21),
//         prop1: `value${quantity}1`,
//         prop2: `value${quantity}2`,
//         prop3: `value${quantity}3`
//     }
//     let copy = [...notes,newElem];
//     setNotes(copy)
// }

//     return (
//         <>
//             <ul>
//                 {result}



//             </ul>
//             {}
//             <p>

//                 <button onClick={addObjToArr}>addObjtoArr</button>
//             </p>
//         </>
//     )
// }


// Реактивные операции над массивами объектов в React

// 1) В конце каждой li сделайте кнопку, по нажатию на которую эта li будет удаляться из списка.
// 2) Даны три инпута. В конце каждой li сделайте кнопку, по нажатию на которую данные объекта этой li будут попадать в соответствующие инпуты.
// 3) Модифицируйте предыдущую задачу так, чтобы рядом с инпутами была кнопка, по нажатию на которую данные инпутов будут попадать в соответствующую li.


export default function ObjAddToArr() {

    const [notes, setNotes] = useState(initNotes);
    const [inp, setInp] = useState([])
    const [noteId, setNoteId] = useState()

    function doSmth(id) {
        setNotes(notes.filter(note => note.id !== id))
    }

    function setInput(note) {
        setInp([note.prop1,note.prop2,note.prop3])
        setNoteId(note.id)
    }

    function setList() {
        setNotes(notes.map((e) => {
            if(e.id === noteId) {
                e.prop1 = inp[0]
                e.prop2 = inp[1]
                e.prop3 = inp[2]
                return e
            } else {
                return e
            }
        }))
    }

    function changeInp(event, ind) {
        setInp([...inp.slice(0,ind), event.target.value, ...inp.slice(ind+1)])
    }


    const result = notes.map(note => {
        return <li key={note.id}>
            <span>{note.prop1} </span>
            <span>{note.prop2} </span>
            <span>{note.prop3} </span>

            <button onClick={() => doSmth(note.id)}>
                del
            </button>
            <button onClick={()=>setInput(note)}>add to input</button>
        </li>;
    });

    return <div>
        <ul>
            {result}
        </ul>
        <div>
            <input value={inp[0]} onChange={(event)=>changeInp(event, 0)}/>
        </div>
        <div>
            <input value={inp[1]} onChange={(event)=>changeInp(event, 1)}/>
        </div>
        <div>
            <input value={inp[2]} onChange={(event)=>changeInp(event, 2)}/>
        </div>
        <button onClick={setList}>add to li</button>

    </div>;

}