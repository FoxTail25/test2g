

export default function UserField({ id, name, field, isEdit, editUser }) {

    return <>

        {
            isEdit
                ? <input value={name} onChange={(ev) => editUser(id, field, ev)} />
                : <span>{name} </span>
        }

    </>

}