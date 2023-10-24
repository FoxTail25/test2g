// Реактивное добавление в массив объектов в React

import { nanoid } from "nanoid";
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


export default function ObjAddToArr() {
    
    const [notes, setNotes] = useState(initNotes)
    
    let result = notes.map(el => <li key={el.id}>
        <span>{el.prop1} </span>
        <span>{el.prop2} </span>
        <span>{el.prop3} </span>
    </li>)

return (
    <ul>
            {result}
            {nanoid(21)}
        </ul>
    )
}