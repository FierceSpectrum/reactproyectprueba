import React, { useState, useEffect } from 'react';
//import FirebaseConnection from './Firebase';
import database from './database.json'


function UserName() {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            //const usersData = await FirebaseConnection.getCollection('Users');
            const usersData = Object.values(database)
            setUsers(usersData);
        };
        fetchData()
    }, []);


    return (
        <div className="App">
            <ul>

                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))
                }
            </ul>
        </div>
    );
}

export default UserName;
