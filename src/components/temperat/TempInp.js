

function TempInp({temp, setTemp}) {

    return <input type="number" value={temp} onChange={(e)=> setTemp(+e.target.value)}/>
}

export default TempInp