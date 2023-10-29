
function Verdict({temp}) {
    
    let result;

    if(+temp >= 100) {
        result = " парообразное"
    } else if (+temp < 100 && temp > 0) {
        result = " жидкое"
    } else {
        result = " твердое"
    }
        
    return <p>
        состояние:{result}
    </p>
}


export default Verdict