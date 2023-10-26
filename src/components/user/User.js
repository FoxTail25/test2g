export default function User({ id, name, surname, ban, addToBan }) {

    // console.log();

    return <div >
        <p style={{ marginBottom: "5px" }}>
            id: <span>{id} </span>
        </p>
        Имя: <span>{name} </span>
        Фамилия: <span>{surname}</span>
        <p>
            <span style={{
                background: ban ? "red" : "green",
                transition: ".5s",
                verticalAlign: "bottom",
                borderRadius: "5px",
                padding: "0 5px"
            }}>
                ban {ban ? "true" : "false"}
            </span>
            <button onClick={() => addToBan(id)} style={{ marginLeft: "10px" }}>ban</button>
        </p>
    </div>
}