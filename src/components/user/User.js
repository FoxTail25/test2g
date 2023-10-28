import UserField from "./userField"

export default function User({ id, name, surname, ban, addToBan, isEdit, editToggle, editUser }) {

    const ml = { marginLeft: "10px" }

    return <div >
        <p style={{ marginBottom: "5px" }}>
            id: <span>{id} </span>
        </p>
        {/* "Имя:"
        {
            isEdit
                ? <input value={name} onChange={(ev) => editUser(id, 'name', ev)} />
                : <span>{name} </span>
        }
        Фамилия:
        {
            isEdit
                ? <input value={surname} onChange={(ev) => editUser(id, 'surname', ev)} />
                : <span>{surname}</span>
        } */}
        "Имя:"
        <UserField
            id={id}
            name={name}
            field="name"
            isEdit={isEdit}
            editUser={editUser}
        />
        "Фамилия"
        <UserField
            id={id}
            name={surname}
            field="surname"
            isEdit={isEdit}
            editUser={editUser}
        />
        <button style={ml} onClick={() => editToggle(id)}>
            {isEdit
                ? "save"
                : "edit"
            }
        </button>
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
            <button onClick={() => addToBan(id)} style={ml}>ban</button>
        </p>
    </div >
}