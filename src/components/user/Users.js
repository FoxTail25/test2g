import { nanoid } from "nanoid";
import React, { useState } from "react";
import User from "./User";

const initUsers = [
	{id: nanoid(), name: 'user1', surname: 'surn1', 
		age: 30}, 
	{id: nanoid(), name: 'user2', surname: 'surn2', 
		age: 31}, 
	{id: nanoid(), name: 'user3', surname: 'surn3', 
		age: 32}, 
];

const Users = () => {

	const [usersArr, setUsersArr] = useState(initUsers);

    return <>
        {usersArr.map(user => 
			<User 
			style={{margin: "0 auto"}}
			key={user.id}
			id={user.id}
			name={user.name}
			surname={user.surname}/>
			)}
    </>

}

export default Users