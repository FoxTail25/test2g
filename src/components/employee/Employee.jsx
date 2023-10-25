import EmployeeTr from "./EmployeeTr"

//Создание дочерних компонентов в React

const employee = [
    {
        name: "Сергей",
        name2: "Петрович",
        surn: "Джунов",
        gross: "1000$"
    },
    {
        name: "Иван",
        name2: "Дмитревич",
        surn: "Мидлов",
        gross: "2100$"
    },
    {
        name: "Василий",
        name2: "Александрович",
        surn: "Сеньёров",
        gross: "3000$"
    },
]

const Employee = () => {

    return <table style={{ margin: "0 auto" }}>

        <tbody>
            {employee.map((emp, ind) => {
                return <EmployeeTr key={ind} name={emp.name} name2={emp.name2} surn={emp.surn} gross={emp.gross} />
            })}
        </tbody>

    </table>
}

export default Employee