import { nanoid } from "nanoid";
import React, { useState } from "react";
import User from "./User";

// 1) Возьмите компонент User из предыдущего урока. Сделайте так, чтобы в нем появилась кнопка для бана юзера.

const initUsers = [
	{
		id: nanoid(), name: 'user1', surname: 'surn1',
		age: 30, ban: true, isEdit:false
	},
	{
		id: nanoid(), name: 'user2', surname: 'surn2',
		age: 31, ban: true, isEdit:false
	},
	{
		id: nanoid(), name: 'user3', surname: 'surn3',
		age: 32, ban: true, isEdit:false
	},
];

const Users = () => {

	const [usersArr, setUsersArr] = useState(initUsers);

	function addToBan(id) {
		setUsersArr(usersArr.map(user => {
			if (user.id === id) {
				user.ban = !user.ban;
				return user
			} else {
				return user
			}
		}))
	}

	function editToggle(id) {
		setUsersArr(usersArr.map(user => {
			if (user.id === id) {
				user.isEdit = !user.isEdit;
				return user
			} else {
				return user
			}
		}))
	}

	function editUser(id, fild, event) {
		setUsersArr(usersArr.map(user => {
			if (user.id === id) {
				user[fild] = event.target.value;
				return user
			} else {
				return user
			}
		}))
	}

	return <div style={{ margin: "0 auto", width: "fit-content" }}>
		{usersArr.map(user =>
			<User
				key={user.id}
				id={user.id}
				name={user.name}
				surname={user.surname}
				ban={user.ban}
				addToBan={addToBan}
				isEdit={user.isEdit}
				editToggle={editToggle}
				editUser={editUser}
			/>
		)}
	</div>

}

export default Users