import { useState } from "react";

let arr = [1, 2, 3, 4, 5];

export default function AddElToArr() {

    const [notes, setNotes] = useState(arr);
    const [inp, setInp] = useState()
    const [data, setdata] = useState()


    const doSmth = (ind, note) => {
        let copy = [...notes];
        setdata(ind)
        setInp(note)
        setNotes(copy)
    }

    const delElem = (ind) => {
        let copy = [...notes.slice(0, ind), ...notes.slice(+ind + 1)];
        setNotes(copy)
    }

    const result = notes.map((note, index) => {
        return (
            <li key={index}>
                <span style={{ paddingRight: "10px" }} onClick={() => doSmth(index, note)}>
                    {note}
                </span>
                <button style={{ marginLeft: "10px" }} onClick={() => delElem(index)}>
                    del
                </button>
            </li>
        );
    });

    const backToUl = (e) => {
        let copy = [...notes.slice(0, data), e.target.value, ...notes.slice(+data + 1)]
        setNotes(copy)
    }

    return <div>
        <ul>
            {result}
        </ul>
        <input value={inp} onChange={(e) => setInp(e.target.value)} onBlur={(e) => backToUl(e)} />
        <div>
        <button onClick={()=>setNotes([...notes].reverse())}>reverse</button>
        </div>
    </div>;
}