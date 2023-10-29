
import { useState } from "react";
import TempInp from "./TempInp";
import Verdict from "./Verdict";

// const product = 0;


function Temperat() {

    const [temp, setTemp] = useState(0)

    return <>
    <TempInp temp={temp} setTemp={setTemp}/>
    <Verdict temp={temp}/>

    </>
}

export default Temperat;