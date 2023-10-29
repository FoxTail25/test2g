import ProdFields2 from "./prodField2"


function Prod2({id, name, cost, catg, changeField}) {



    return <tr>
    <ProdFields2 id={id} text={name} type={'name'} changeField={changeField}/>
    <ProdFields2 id={id} text={cost} type={'cost'} changeField={changeField}/>
    <ProdFields2 id={id} text={catg} type={'catg'} changeField={changeField}/>
    </tr>
    
}

export default Prod2