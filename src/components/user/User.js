export default function User({style, id, name, surname }) {

console.log(style);

    return <div style={style}>
        <p style={{marginBottom: "5px"}}>
            id: <span>{id} </span>
        </p>
        {/* <p> */}
            Имя: <span>{name} </span>
            Фамилия: <span>{surname}</span>
        {/* </p> */}
    </div>
}